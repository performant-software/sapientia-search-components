// For helpers that return React elements

import localizations from "./localizations"

export const handleDate = (hit: any): string => {
  const day = hit[import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_DAY_UUID]
  const month = hit[import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_MONTH_UUID]
  const year = hit[import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_YEAR_UUID]

  if (year && month && day) {
    return new Date(year, month - 1, day).toISOString().slice(0, 10)
  } else {
    return '?'
  }
}

// Returns the first related name from the given relation UUID
export const displayRelation = (hit: any, uuid: string) => {
  const relatedItem = hit[uuid] ? hit[uuid][0] : null
  if (relatedItem) {
    return hit[uuid][0].name
  }

  return null
}

export const displayAttribute = (value: string | undefined, locale: 'en' | 'fr') => (
  value || <span><em>{localizations.emptyField[locale]}</em></span>
)
