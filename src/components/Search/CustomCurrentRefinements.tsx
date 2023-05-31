import { CurrentRefinementsProvided } from 'react-instantsearch-core'
import { connectCurrentRefinements } from 'react-instantsearch-dom'
import availableFacets from './facets'
import { X } from 'react-bootstrap-icons'
import styles from '../../styles/Search.module.css'
import { isNumberRefinement } from '../../helpers/typeGuards'
import { Refinement as ISRefinement } from 'react-instantsearch-core'
import { Refinement } from '../../lib/supplique_types'

interface Props extends CurrentRefinementsProvided {
    locale: 'en' | 'fr'
}

// There seems to be a problem with the Refinement types from InstantSearch, so
// we have to use our own types. The built-in typing doesn't account for the min/max
// obj that numeric refinements have.

const CurrentRefinements: React.FC<Props> = ({ items, locale, refine }) => {
    // Format refinement names and values for display
    const getValues = (item: Refinement) => {
        const label = availableFacets.find(f => f.name === item.attribute)?.label[locale]
        let values: string[]

        if (isNumberRefinement(item)) {
            values = [`${item.currentRefinement.min} - ${item.currentRefinement.max}`]
        } else {
            values = item.currentRefinement
        }

        return {
            label: label ? label : item.attribute,
            values
        }
    }

    // In order for the refine function to work, we need to hold on to
    // the original refinement item alongside our formatted one.
    const displayItems = items.map(i => ({
        display: getValues(i as any),
        original: i
    }))

    // Don't show component if there are no current refinements
    if (items.length === 0) {
        return null
    }

    const removeRefinement = (original: ISRefinement, value: string) => {
        if (Array.isArray(original.currentRefinement)) {
            const query = original.items?.find(item => item.label === value)
            if (query) {
                refine(query.value)
            }
        } else {
            refine(original.value)
        }
    }

    return (
        <ul className={styles.currentRefinementList}>
            {displayItems.map(item => {
                return (
                    <li
                        key={item.display.label}
                        className={styles.currentRefinement}
                    >
                        <span
                            className={styles.currentRefinementLabel}
                        >
                            {item.display.label}:&nbsp;
                        </span>
                        {item.display.values.map(value => {
                            return (
                                <button
                                    onClick={() => removeRefinement(item.original, value)}
                                    key={value}
                                >
                                    <span
                                        className={styles.currentRefinementValue}
                                    >
                                        {value}
                                    </span>
                                    <X />
                                </button>
                            )
                        })}
                    </li>
                )
            })}
        </ul>
    )
}

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements)

export default CustomCurrentRefinements
