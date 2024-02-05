import { Highlight } from 'react-instantsearch'
import { HitConfig, HitLeftColumnItem } from '../../../lib/types'
import { ReactElement, useCallback, useMemo } from 'react'
import { Field, parseFacet } from '../../../lib/search'

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

const displayUdf = (uuid: string, hit: any, udfs: Field[]) => {
  const match = udfs.find(udf => udf.uuid === uuid)

  if (match && hit[match.value]) {
    return hit[match.value]
  }

  return ''
}

const Hit = ({ hit, hitConfig, onHitClick, hitWrapperComponent, getHitWrapperProps }: Props) => {
  const Wrapper = hitWrapperComponent || LinkWrapper

  const wrapperProps = useMemo(() => {
    if (getHitWrapperProps) {
      return getHitWrapperProps(hit)
    }

    return { hit, onHitClick }
  }, [getHitWrapperProps, hit, onHitClick])

  const udfs: Field[] = useMemo(() => (
    Object.keys(hit)
      .filter(k => k.startsWith('ey'))
      .map(k => parseFacet(k))
  ), [hit])

  console.log(udfs)

  const highlightKey = useMemo(() => (
    udfs.find(f => f.uuid === hitConfig.rightPanel.uuid)?.value || ''
  ), [hitConfig.rightPanel.uuid, udfs])

  const identifierKey = useMemo(() => (
    udfs.find(f => f.uuid === hitConfig.identifierUuid)?.value || ''
  ), [hitConfig.identifierUuid, udfs])

  const getFieldValue = useCallback((configItem: HitLeftColumnItem) => {
    let value: string | ReactElement = <></>

    if (configItem.uuid) {
      value = <span>{displayUdf(configItem.uuid, hit, udfs)}</span>
    } else if (configItem.render) {
      value = <span>{configItem.render(hit)}</span>
    }

    return value;
  }, [hit, udfs])

  console.log(identifierKey)

  return (
    <Wrapper {...wrapperProps} className='hitLink'>
      <li className='hit'>
        <div className='left'>
          {hitConfig.identifierUuid
            ? (
              <h2 className='headline'>
                <span>
                  #
                  <Highlight
                    attribute={[identifierKey]}
                    hit={hit}
                    highlightedTagName='mark'
                  />
                </span>
              </h2>
            )
            : null
          }
          {hitConfig.leftColumnItems.map((configItem, idx) => {
            if (configItem.uuid || configItem.render)
              return (
                <p
                  className='hitData'
                  key={idx}
                >
                  <span title={configItem.caption}>
                    {configItem.icon}
                  </span>
                  <strong>
                    {getFieldValue(configItem)}
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
                attribute={[highlightKey]}
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
