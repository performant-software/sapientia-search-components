// For helpers that return React elements

import { Highlight } from "react-instantsearch-hooks-web"
import localizations from "./localizations"

export const handleDate = (hit: any) => {
  if (hit.year && hit.month && hit.day) {
    return <span>{new Date(hit.year, hit.month - 1, hit.day).toISOString().slice(0, 10)}</span>
  } else {
    return <span><em>?</em></span>
  }
}

export const displayNestedAttribute = (hit: any, name: string, locale: 'en' | 'fr') => {
  const splitName = name.split('.')

  let item = hit
  while (splitName.length > 0) {
    if (item[splitName[0]]) {
      item = item[splitName[0]]
      splitName.shift()
    } else {
      item = null
      break
    }
  }

  if (item) {
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

export const displayAttribute = (hit: any, name: string, locale: 'en' | 'fr') => {
  if (hit[name]) {
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
