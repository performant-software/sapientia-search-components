import { Highlight, Snippet } from 'react-instantsearch'
import { ReactElement, useContext, useMemo } from 'react'
import SearchContext from '../SearchContext'

interface Props {
  // No idea how to type the Hit - importing the types that
  // instantsearch uses causes type errors, even though the
  // code in this component works fine 🤷‍♂️
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hit: any,
  locale: 'en' | 'fr',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const LinkWrapper: React.FC<{
  hit: any,
  onHitClick?: (arg: any) => void,
  children: ReactElement | ReactElement[]
}> = ({ hit, onHitClick, children }) => (
  <a
    className='hitLink'
    onClick={onHitClick ? () => onHitClick(hit) : () => null}
  >
    {children}
  </a>
)

const Hit = ({ hit, onHitClick, hitWrapperComponent, getHitWrapperProps, locale }: Props) => {
  const { fields } = useContext(SearchContext)

  const Wrapper = hitWrapperComponent || LinkWrapper

  const wrapperProps = useMemo(() => {
    if (getHitWrapperProps) {
      return getHitWrapperProps(hit)
    }

    return { hit, onHitClick }
  }, [getHitWrapperProps, hit, onHitClick])

  const showcaseField = useMemo(() => Object.entries(fields).find(f => f[1].type === 'showcase'), [fields])

  const ShowcaseComponent = useMemo(() => {
    if (showcaseField && showcaseField[1]?.snippet) {
      return Snippet
    }

    return Highlight
  }, [showcaseField])

  const identifierField = useMemo(() => Object.entries(fields).find(f => f[1].type === 'identifier'), [fields])

  const regularFields = useMemo(() =>
    Object.entries(fields)
      .filter(f => !f[1].type && hit[f[0]])
      .map(field => {
        const IconComponent = field[1].icon;

        return (
          <p
            className='hitData'
            key={field[0]}
          >
            {IconComponent
              ? <span title={field[1]?.caption ? field[1].caption[locale] : undefined}>
                <IconComponent />
              </span>
              : <></>}
            <strong>
              {hit[field[0]]}
            </strong>
          </p>
        )
      }), [fields, hit, locale])

  const renderedFields = useMemo(() =>
    Object.values(fields)
      .filter(f => f.render)
      .map((field, idx) => {
        const result = (field.render as (hit: any) => string)(hit)

        if (result) {
          return (
            <p
              className='hitData'
              key={idx}
            >
              {field.icon
                ? <span title={field?.caption ? field.caption[locale] : undefined}>
                  <field.icon />
                </span>
                : <></>}
              <strong>
                {result}
              </strong>
            </p>
          )
        }
      }), [fields, hit, locale])

  return (
    <Wrapper {...wrapperProps} className='hitLink'>
      <li className='hit'>
        <div className='left'>
          {identifierField
            && hit[identifierField[0]]
            ? (
              <h2 className='headline'>
                <span>
                  #
                  <Highlight
                    attribute={[identifierField[0]]}
                    hit={hit}
                    highlightedTagName='mark'
                  />
                </span>
              </h2>
            )
            : null
          }
          {regularFields}
          {renderedFields}
        </div>
        <div className='right'>
          <div className='summary'>
            {showcaseField && showcaseField[1]?.caption
              ? <h3>{showcaseField[1]?.caption[locale]}</h3>
              : null}
            {showcaseField
              && hit[showcaseField[0]]
              ?
              (<p>
                <ShowcaseComponent
                  attribute={[showcaseField[0]]}
                  hit={hit}
                  highlightedTagName='mark'
                />
              </p>)
              : <></>
            }
          </div>
        </div>
      </li >
    </Wrapper >
  )
}

export default Hit
