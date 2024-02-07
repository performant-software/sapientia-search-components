import { Highlight } from 'react-instantsearch'
import { Field } from '../../../lib/types'
import { ReactElement, useContext, useEffect, useMemo } from 'react'
import { parseFacet } from '../../../lib/search'
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
  const Wrapper = hitWrapperComponent || LinkWrapper

  const wrapperProps = useMemo(() => {
    if (getHitWrapperProps) {
      return getHitWrapperProps(hit)
    }

    return { hit, onHitClick }
  }, [getHitWrapperProps, hit, onHitClick])

  const { fields, fieldsDispatch } = useContext(SearchContext);

  // Cycle through field names and parse the JWTs to connect them
  // with our UUID map if they haven't been mapped already. We have
  // to do this on each hit because not every hit has every field,
  // i.e. if a hit doesn't contain a value for a field, the field
  // isn't sent with that hit.
  useEffect(() => {
    const jwtFieldNames = Object.keys(hit).filter(k => k.startsWith('ey'))

    const newFields: Field[] = []

    jwtFieldNames.forEach(jwt => {
      const cached = fields.find(field => field?.value === jwt)
      if (!cached) {
        const parsed = parseFacet(jwt)
        newFields.push(parsed)
      }
    })

    if (newFields.length > 0) {
      fieldsDispatch(newFields)
    }
  }, [fieldsDispatch, hit])

  const showcaseField = useMemo(() => fields.find(f => f.type === 'showcase'), [fields])

  const identifierField = useMemo(() => fields.find(f => f.type === 'identifier'), [fields])

  const regularFields = useMemo(() =>
    fields
      .filter(f => f.uuid && !f.type && hit[f.value as string])
      .map(field => ((
        <p
          className='hitData'
          key={field.uuid}
        >
          {field.icon
            ? <span title={field?.caption ? field.caption[locale] : undefined}>
              <field.icon />
            </span>
            : <></>}
          <strong>
            {hit[field.value as string]}
          </strong>
        </p>
      )
      )), [fields, hit, locale])

  const renderedFields = useMemo(() =>
    fields
      .filter(f => f.render)
      .map((field, idx) => (
        (
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
              {(field.render as (hit: any) => string)(hit)}
            </strong>
          </p>
        )
      )), [fields, hit, locale])

  return (
    <Wrapper {...wrapperProps} className='hitLink'>
      <li className='hit'>
        <div className='left'>
          {identifierField?.value
            && hit[identifierField.value]
            ? (
              <h2 className='headline'>
                <span>
                  #
                  <Highlight
                    attribute={[identifierField.value]}
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
            {showcaseField?.caption
              ? <h3>{showcaseField?.caption[locale]}</h3>
              : null}
            {showcaseField?.value
              && hit[showcaseField.value]
              ?
              (<p>
                <Highlight
                  attribute={[showcaseField.value]}
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
