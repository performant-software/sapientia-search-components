import { Highlight } from 'react-instantsearch-hooks-web'
import type { SearchResult } from '../../../lib/supplique_types'
import localizations from '../../../lib/localizations'
import {
    Calendar4Event,
    GeoAlt,
    Bank,
    Person,
    Building
} from 'react-bootstrap-icons'
import { HitConfig } from '../../../lib/types'

interface Props {
    // No idea how to type the Hit - importing the types that
    // instantsearch uses causes type errors, even though the
    // code in this component works fine 🤷‍♂️
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hit: any,
    hitConfig: HitConfig,
    locale: 'en' | 'fr'
}

const Hit = ({ hit, hitConfig, locale }: Props) => {
    return (
        <a className='hitLink'>
            <li className='hit'>
                <div className='left'>
                    <h2 className='numberOrder'>
                        <span>
                            #
                            <Highlight
                                attribute='number_order'
                                hit={hit}
                                highlightedTagName='mark'
                            />
                        </span>
                    </h2>
                    {hitConfig.leftColumnItems.map((configItem) => (
                        <p className='hitData'>
                            <span title={configItem.caption}>
                                <Building />
                            </span>
                            <strong>
                                {configItem.renderDisplay
                                    ? configItem.renderDisplay(hit[configItem.attribute])
                                    : hit[configItem.attribute]
                                }
                            </strong>
                        </p> 
                    ))}
                </div>
                <div className='right'>
                    <div className='summary'>
                        <h3>{localizations.text[locale]}</h3>
                        <p>
                            <Highlight
                                attribute='texte'
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
