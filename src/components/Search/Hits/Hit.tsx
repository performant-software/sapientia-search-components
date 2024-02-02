import { Highlight } from 'react-instantsearch'
import { HitConfig } from '../../../lib/types'
import { ReactElement, useCallback, useContext, useMemo } from 'react'
import SearchContext from '../SearchContext'
import { Facet } from '../../../lib/search'

interface Props {
  // No idea how to type the Hit - importing the types that
  // instantsearch uses causes type errors, even though the
  // code in this component works fine 🤷‍♂️
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hit: any,
  hitConfig: HitConfig,
  locale: 'en' | 'fr',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const handleArrays = (field: unknown) => {
  if (Array.isArray(field)) {
    return <span>{field.join(', ')}</span>
  } else {
    return <span>{field as string}</span>
  }
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

const Hit = ({ hit, hitConfig, onHitClick, hitWrapperComponent, getHitWrapperProps }: Props) => {
  const Wrapper = hitWrapperComponent || LinkWrapper

  const wrapperProps = useMemo(() => {
    if (getHitWrapperProps) {
      return getHitWrapperProps(hit)
    }

    return { hit, onHitClick }
  }, [getHitWrapperProps, hit, onHitClick])

  const { facets } = useContext(SearchContext);

  const getFacetValue = useCallback((uuid: string) => {
    const facet = facets.find(f => f.uuid === uuid);

    if (facet && facet.uuid) {
      return hit[facet.uuid]
    }

    return null;
  }, [facets, hit])

  const highlightKey = useMemo(() => {
    return facets.find(f => f.uuid === hitConfig.rightPanel.uuid)?.value || '';
  }, [facets, hitConfig.rightPanel.uuid])

  return (
    <Wrapper {...wrapperProps} className='hitLink'>
      <li className='hit'>
        <div className='left'>
          {hitConfig.headlineUuid
            ? (
              <h2 className='headline'>
                {hitConfig.renderHeadlineAttribute
                  ? hitConfig.renderHeadlineAttribute(hit)
                  : hit[hitConfig.headlineUuid]}
              </h2>
            )
            : null
          }
          {hitConfig.leftColumnItems.map((configItem) => {
            if (configItem.renderDisplay || hit[configItem.uuid])
              return (
                <p
                  className='hitData'
                  key={configItem.uuid}
                >
                  <span title={configItem.caption}>
                    {configItem.icon}
                  </span>
                  <strong>
                    {configItem.renderDisplay
                      ? configItem.renderDisplay(hit)
                      : handleArrays(getFacetValue(hit[configItem.uuid]))
                    }
                  </strong>
                </p>
              )
          })}
        </div>
        <div className='right'>
          <div className='summary'>
            {hitConfig.rightPanel.label
              ? <h3>{hitConfig.rightPanel.label}</h3>
              : null}
            <p>
              <Highlight
                attribute={highlightKey}
                hit={hit}
                highlightedTagName='mark'
              />
            </p>
          </div>
        </div>
      </li>
    </Wrapper>
  )
}

export default Hit
