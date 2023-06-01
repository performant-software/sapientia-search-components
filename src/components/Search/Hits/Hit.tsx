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

interface Props {
    // No idea how to type the Hit - importing the types that
    // instantsearch uses causes type errors, even though the
    // code in this component works fine 🤷‍♂️
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hit: any,
    locale: 'en' | 'fr'
}

const Hit = ({ hit, locale }: Props) => {
    // Display a note if the property is null.
    const displayAttribute = (name: string) => {
        if (hit[name as keyof SearchResult]) {
            return (
                <Highlight
                    attribute={[name]}
                    hit={hit}
                />
            )
        } else {
            return <span><em>{localizations.emptyField[locale]}</em></span>
        }
    }

    const handleDate = () => {
        if (hit.year && hit.month && hit.day) {
            return <span>{new Date(hit.year, hit.month - 1, hit.day).toISOString().slice(0, 10)}</span>
        } else {
            return <span><em>?</em></span>
        }
    }

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
                    <p className='hitData'>
                        <span title={localizations.date[locale]}>
                            <Calendar4Event />
                        </span>
                        <strong>{handleDate()}</strong>
                    </p>
                    <p className='hitData'>
                        <span title={localizations.city[locale]}>
                            <Building />
                        </span>
                        <strong>
                            {displayAttribute('town.name')}
                        </strong>
                    </p>
                    <p className='hitData'>
                        <span title={localizations.place_given[locale]}>
                            <GeoAlt />
                        </span>
                        <strong>
                            {displayAttribute('date_of_place.name')}
                        </strong>
                    </p>
                    <p className='hitData'>
                        <span title={localizations.titulature[locale]}>
                            <Bank />
                        </span>
                        <strong>
                            {displayAttribute('titulature.full_name')}
                        </strong>
                    </p>
                    <p className='hitData'>
                        <span title={localizations.commandement[locale]}>
                            <Person />
                        </span>
                        <strong>
                            {displayAttribute('commandement.full_name')}
                        </strong>
                    </p>
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
