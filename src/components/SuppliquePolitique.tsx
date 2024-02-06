import Search from "./Search"
import GlobalStyle from "./global.styled"
import { InstantSearch } from "react-instantsearch"
import localizations from "../lib/localizations"
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import { HitConfig } from "../lib/types"
import { Bank, Building, Calendar4Event, GeoAlt, Person } from "react-bootstrap-icons"
import { handleDate } from "../lib/reactHelpers"
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
        render: (item) => handleDate(item)
      },
      {
        attribute: 'city',
        icon: <Building />,
        caption: localizations.city[locale],
        render: (item: any) => item?.related_places?.find((pl: { type: string }) => pl.type === 'Ville')?.name
      },
      {
        attribute: 'date_of_place',
        icon: <GeoAlt />,
        caption: localizations.place_given[locale],
        render: (item: any) => item?.related_places?.find((pl: { type: string }) => pl.type === 'Date de place')?.name
      },
      {
        attribute: 'titulature',
        icon: <Bank />,
        caption: localizations.titulature[locale],
        render: (item: any) => item?.related_people?.find((p: { type: string }) => p.type === 'Titulature')?.name
      },
      {
        attribute: 'commandement',
        icon: <Person />,
        caption: localizations.commandement[locale],
        render: (item: any) => item?.related_people?.find((p: { type: string }) => p.type === 'Commandement')?.name
      }
    ],
    rightPanel: {
      label: localizations.text[locale],
      attribute: 'text'
    },
    identifierAttribute: 'numberOrder',
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
          project='supplique'
          hitWrapperComponent={hitWrapperComponent}
          getHitWrapperProps={getHitWrapperProps}
        />
      </InstantSearch>
    </GlobalStyle>
  )
}

export default SuppliquePolitique;
