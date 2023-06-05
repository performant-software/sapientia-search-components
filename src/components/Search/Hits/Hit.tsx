import { Highlight } from 'react-instantsearch-hooks-web'
import { HitConfig } from '../../../lib/types'

interface Props {
    // No idea how to type the Hit - importing the types that
    // instantsearch uses causes type errors, even though the
    // code in this component works fine 🤷‍♂️
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hit: any,
    hitConfig: HitConfig
}

const Hit = ({ hit, hitConfig }: Props) => {
    console.log(hitConfig)
    return (
        <a className='hitLink'>
            <li className='hit'>
                <div className='left'>
                    <h2 className='headline'>
                        {hitConfig.renderHeadlineAttribute
                            ? hitConfig.renderHeadlineAttribute(hit)
                            : hit[hitConfig.headlineAttribute]}
                    </h2>
                    {hitConfig.leftColumnItems.map((configItem) => (
                        <p className='hitData'>
                            <span title={configItem.caption}>
                                {configItem.icon}
                            </span>
                            <strong>
                                {configItem.renderDisplay
                                    ? configItem.renderDisplay(hit)
                                    : hit[configItem.attribute]
                                }
                            </strong>
                        </p> 
                    ))}
                </div>
                <div className='right'>
                    <div className='summary'>
                        <h3>{hitConfig.rightPanel.label}</h3>
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
