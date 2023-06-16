import { Highlight } from 'react-instantsearch-hooks-web'
import { HitConfig } from '../../../lib/types'

interface Props {
    // No idea how to type the Hit - importing the types that
    // instantsearch uses causes type errors, even though the
    // code in this component works fine 🤷‍♂️
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hit: any,
    hitConfig: HitConfig,
    locale: 'en' | 'fr',
    onHitClick?: (arg: any) => void
}

const handleArrays = (field: unknown) => {
    if (Array.isArray(field)) {
        return <span>{field.join(', ')}</span>
    } else {
        return <span>{field as string}</span>
    }
}

const Hit = ({ hit, hitConfig, onHitClick }: Props) => {
    return (
        <a
            className='hitLink'
            onClick={onHitClick ? () => onHitClick(hit) : () => null}
        >
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
        </a>
    )
}

export default Hit