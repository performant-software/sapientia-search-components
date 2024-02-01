import { Highlight } from 'react-instantsearch'
import { HitConfig } from '../../../lib/types'
import { ReactElement, useMemo } from 'react'

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

    return (
        <Wrapper {...wrapperProps} className='hitLink'>
            <li className='hit'>
                <div className='left'>
                    {hitConfig.headlineAttribute
                        ? (
                            <h2 className='headline'>
                                {hitConfig.renderHeadlineAttribute
                                    ? hitConfig.renderHeadlineAttribute(hit)
                                    : hit[hitConfig.headlineAttribute]}
                            </h2>
                        )
                        : null
                    }
                    {hitConfig.leftColumnItems.map((configItem) => {
                        if (configItem.renderDisplay || hit[configItem.attribute])
                            return (
                                <p
                                    className='hitData'
                                    key={configItem.attribute}
                                >
                                    <span title={configItem.caption}>
                                        {configItem.icon}
                                    </span>
                                    <strong>
                                        {configItem.renderDisplay
                                            ? configItem.renderDisplay(hit)
                                            : handleArrays(hit[configItem.attribute])
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
                                attribute={hitConfig.rightPanel.attribute}
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
