import { useCurrentRefinements } from 'react-instantsearch-core'
import { X } from 'react-bootstrap-icons'
import { isNumberRefinement } from '../../lib/typeGuards'
import {
  CurrentRefinementsConnectorParams,
  CurrentRefinementsConnectorParamsItem
} from 'instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements'
import { useContext } from 'react'
import SearchContext from './SearchContext'

interface Props extends CurrentRefinementsConnectorParams {
  locale: 'en' | 'fr'
}

// There seems to be a problem with the Refinement types from InstantSearch, so
// we have to use our own types. The built-in typing doesn't account for the min/max
// obj that numeric refinements have.

const CustomCurrentRefinements: React.FC<Props> = (props) => {
  const {
    items,
    refine
  } = useCurrentRefinements(props)

  const { facets } = useContext(SearchContext);

  // Format refinement names and values for display
  const getValues = (item: CurrentRefinementsConnectorParamsItem) => {
    const label = facets.find(f => f.value === item.attribute)?.displayLabel
    let values: Array<string | number>

    if (isNumberRefinement(item)) {
      const min = item.refinements[0]?.value
      const max = item.refinements[1]?.value

      if (min && max) {
        values = [`${min} - ${max}`]
      } else if (min) {
        values = [`> ${min}`]
      } else {
        values = [`< ${max}`]
      }
    } else {
      values = item.refinements.map(r => r.value as string)
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

  const removeRefinement = (original: CurrentRefinementsConnectorParamsItem) => {
    refine(original.refinements[0])
  }

  return (
    <ul className='currentRefinementList'>
      {displayItems.map(item => {
        return (
          <li
            key={item.display.label}
            className='currentRefinement'
          >
            <span
              className='currentRefinementLabel'
            >
              {item.display.label}:&nbsp;
            </span>
            {item.display.values.map(value => {
              return (
                <button
                  onClick={() => removeRefinement(item.original)}
                  key={value}
                >
                  <span
                    className='currentRefinementValue'
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

export default CustomCurrentRefinements
