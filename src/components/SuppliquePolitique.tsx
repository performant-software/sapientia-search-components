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
        icon: <Calendar4Event />,
        caption: localizations.date[locale],
        render: (item) => handleDate(item)
      },
      {
        icon: <Building />,
        caption: localizations.city[locale],
        render: (item: any) => item?.related_places?.find((pl: { type: string }) => pl.type === 'Ville')?.name
      },
      {
        icon: <GeoAlt />,
        caption: localizations.place_given[locale],
        render: (item: any) => item?.related_places?.find((pl: { type: string }) => pl.type === 'Date de place')?.name
      },
      {
        icon: <Bank />,
        caption: localizations.titulature[locale],
        render: (item: any) => item?.related_people?.find((p: { type: string }) => p.type === 'Titulature')?.name
      },
      {
        icon: <Person />,
        caption: localizations.commandement[locale],
        render: (item: any) => item?.related_people?.find((p: { type: string }) => p.type === 'Commandement')?.name
      }
    ],
    rightPanel: {
      label: localizations.text[locale],
      uuid: '0ce611e4-4622-4160-8857-28ee7c915a8e'
    },
    identifierUuid: 'e247c848-08af-4bbd-bdd1-eed94b776c12',
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
