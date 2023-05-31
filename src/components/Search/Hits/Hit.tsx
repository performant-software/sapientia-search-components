import { Highlight } from 'react-instantsearch-hooks-web'
import type { SearchResult } from '../../../lib/supplique_types'
import styles from '../../../styles/Search.module.css'
import localizations from '../../../lib/localizations'
import TruncatedHighlight from './TruncatedHighlight'
import {
    Calendar4Event,
    GeoAlt,
    Bank,
    Person,
    Building
} from 'react-bootstrap-icons'

interface Props {
    hit: SearchResult,
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
                    tagName='mark'
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
        <Link href={`/${locale}/document/${hit.number_order}`}>
            <a className={styles.hitLink}>
                <li className={styles.hit}>
                    <div className={styles.left}>
                        <h2 className={styles.numberOrder}>
                            <span>
                                #
                                <Highlight
                                    attribute='number_order'
                                    hit={hit}
                                    tagName='mark'
                                />
                            </span>
                        </h2>
                        <p className={styles.hitData}>
                            <span title={localizations.date[locale]}>
                                <Calendar4Event />
                            </span>
                            <strong>{handleDate()}</strong>
                        </p>
                        <p className={styles.hitData}>
                            <span title={localizations.city[locale]}>
                                <Building />
                            </span>
                            <strong>
                                {displayAttribute('town.name')}
                            </strong>
                        </p>
                        <p className={styles.hitData}>
                            <span title={localizations.place_given[locale]}>
                                <GeoAlt />
                            </span>
                            <strong>
                                {displayAttribute('date_of_place.name')}
                            </strong>
                        </p>
                        <p className={styles.hitData}>
                            <span title={localizations.titulature[locale]}>
                                <Bank />
                            </span>
                            <strong>
                                {displayAttribute('titulature.full_name')}
                            </strong>
                        </p>
                        <p className={styles.hitData}>
                            <span title={localizations.commandement[locale]}>
                                <Person />
                            </span>
                            <strong>
                                {displayAttribute('commandement.full_name')}
                            </strong>
                        </p>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.summary}>
                            <h3>{localizations.text[locale]}</h3>
                            <p>
                                <TruncatedHighlight
                                    attribute='texte'
                                    hit={hit}
                                    locale={locale}
                                />
                            </p>
                        </div>
                    </div>
                </li>
            </a>
        </Link>
    )
}

export default Hit