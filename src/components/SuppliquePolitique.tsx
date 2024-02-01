import Search from "./Search"
import GlobalStyle from "./global.styled"
import { Highlight, InstantSearch } from "react-instantsearch"
import localizations from "../lib/localizations"
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import { HitConfig } from "../lib/types"
import { Bank, Building, Calendar4Event, GeoAlt, Person } from "react-bootstrap-icons"
import { displayAttribute, handleDate } from "../lib/reactHelpers"
import searchClient from "../lib/searchClient"

export interface SuppliqueProps {
  locale: 'fr' | 'en',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const SuppliquePolitique: React.FC<SuppliqueProps> = ({ locale, onHitClick, hitWrapperComponent, getHitWrapperProps }) => {
  const hitConfig: HitConfig = {
    leftColumnItems: [
      {
        attribute: 'date',
        icon: <Calendar4Event />,
        caption: localizations.date[locale],
        renderDisplay: (item) => handleDate(item)
      },
      {
        attribute: 'town',
        icon: <Building />,
        caption: localizations.city[locale],
        renderDisplay: (item) => displayAttribute(item, 'town.name', locale)
      },
      {
        attribute: 'place_given',
        icon: <GeoAlt />,
        caption: localizations.place_given[locale],
        renderDisplay: (item) => displayAttribute(item, 'date_of_place.name', locale)
      },
      {
        attribute: 'titulature',
        icon: <Bank />,
        caption: localizations.titulature[locale],
        renderDisplay: (item) => displayAttribute(item, 'titulature.full_name', locale)
      },
      {
        attribute: 'commandement',
        icon: <Person />,
        caption: localizations.commandement[locale],
        renderDisplay: (item) => displayAttribute(item, 'commandement.full_name', locale)
      }
    ],
    rightPanel: {
      attribute: 'texte',
      label: localizations.text[locale]
    },
    headlineAttribute: 'number_order',
    renderHeadlineAttribute: (hit) => (
      <span>
        #
        <Highlight
          attribute='number_order'
          hit={hit}
          highlightedTagName='mark'
        />
      </span>
    ),
    sortFields: [
      { value: 'textes', label: localizations.relevance[locale] },
      { value: 'textes:timestamp:asc', label: localizations.chronologicalAsc[locale] },
      { value: 'textes:timestamp:desc', label: localizations.chronologicalDesc[locale] },
      { value: 'textes:number_order:asc', label: localizations.numberOrderAsc[locale] },
      { value: 'textes:number_order:desc', label: localizations.numberOrderDesc[locale] }
    ]
  }

  return (
    <GlobalStyle>
      <InstantSearch
        indexName={import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_INDEX_NAME}
        searchClient={searchClient}
      >
        <Search
          locale={locale}
          hitConfig={hitConfig}
          onHitClick={onHitClick}
          hitWrapperComponent={hitWrapperComponent}
          getHitWrapperProps={getHitWrapperProps}
        />
      </InstantSearch>
    </GlobalStyle>
  )
}

export default SuppliquePolitique;
