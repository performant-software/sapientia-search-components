import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import { useMemo } from "react";
import Search from './Search';
import localizations from "../lib/localizations";
import { InstantSearch } from "react-instantsearch";
import { Book, Building, Calendar, MapFill } from "react-bootstrap-icons";
import searchClient from "../lib/searchClient";

export interface BischoffProps {
  locale: 'fr' | 'en',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const Bischoff: React.FC<BischoffProps> = ({ locale, onHitClick, hitWrapperComponent, getHitWrapperProps }) => {
  const hitConfig = useMemo(() => ({
    leftColumnItems: [
      {
        attribute: 'relatedOrganizations',
        icon: <Building />,
        caption: localizations.archive[locale],
        render: (item: any) => item?.related_organizations.find((o: any) => o.type === 'Archives')?.name
      },
      {
        attribute: 'archiveLocation',
        icon: <MapFill />,
        caption: localizations.archiveLocation[locale],
        // Uh oh. Only one layer of relations is indexed and archive location requires two layers.
        render: () => 'TODO'
      },
      {
        attribute: 'originalDate',
        icon: <Calendar />,
        caption: localizations.origDate[locale]
      },
      {
        attribute: 'relatedWorks',
        icon: <Book />,
        caption: localizations.works[locale],
        render: (item: any) => item?.related_works ? item.related_works.map((w: { name: string }) => w.name) : undefined
      }
    ],
    rightPanel: {
      attribute: 'text',
      label: localizations.text[locale]
    },
    identifierAttribute: 'catalogNumber'
  }), [locale])

  return (
    <GlobalStyle>
      <InstantSearch
        indexName={import.meta.env.VITE_APP_TYPESENSE_BISCHOFF_INDEX_NAME}
        searchClient={searchClient}
      >
        <Search
          locale={locale}
          hitConfig={hitConfig}
          onHitClick={onHitClick}
          project='bischoff'
          hitWrapperComponent={hitWrapperComponent}
          getHitWrapperProps={getHitWrapperProps}
        />
      </InstantSearch>
    </GlobalStyle>
  )
}

export default Bischoff;
