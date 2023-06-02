// For helpers that return React elements

import { Highlight } from "react-instantsearch-hooks-web"
import localizations from "./localizations"
import { SearchResult } from "./types"

export const handleDate = (hit: any) => {
  if (hit.year && hit.month && hit.day) {
      return <span>{new Date(hit.year, hit.month - 1, hit.day).toISOString().slice(0, 10)}</span>
  } else {
      return <span><em>?</em></span>
  }
}

export const displayAttribute = (hit: any, name: string, locale: 'en' | 'fr') => {
    console.log(hit)
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