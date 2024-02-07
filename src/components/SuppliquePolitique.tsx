import Search from "./Search"
import GlobalStyle from "./global.styled"
import { InstantSearch } from "react-instantsearch"
import localizations from "../lib/localizations"
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import searchClient from "../lib/searchClient"
import { useMemo } from "react"
import { SortField } from "../lib/types"

export interface SuppliqueProps {
  locale: 'fr' | 'en',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const SuppliquePolitique: React.FC<SuppliqueProps> = ({ locale, onHitClick, hitWrapperComponent, getHitWrapperProps }) => {
  const sortFields: SortField[] = useMemo(() => ([
    { value: 'supplique', label: localizations.relevance[locale] },
    { value: 'supplique:year:asc', label: localizations.chronologicalAsc[locale] },
    { value: 'supplique:year:desc', label: localizations.chronologicalDesc[locale] },
    { value: 'supplique:numberOrder:asc', label: localizations.numberOrderAsc[locale] },
    { value: 'supplique:numberOrder:desc', label: localizations.numberOrderDesc[locale] }
  ]), [locale])

  return (
    <GlobalStyle>
      <InstantSearch
        indexName={import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_INDEX_NAME}
        searchClient={searchClient}
      >
        <Search
          locale={locale}
          onHitClick={onHitClick}
          project='supplique'
          sortFields={sortFields}
          hitWrapperComponent={hitWrapperComponent}
          getHitWrapperProps={getHitWrapperProps}
        />
      </InstantSearch>
    </GlobalStyle>
  )
}

export default SuppliquePolitique;
