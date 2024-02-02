import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import { useMemo } from "react";
import Search from './Search';
import localizations from "../lib/localizations";
import { Highlight, InstantSearch } from "react-instantsearch";
import { Book, Building, Calendar, MapFill } from "react-bootstrap-icons";
import { displayAttribute } from "../lib/reactHelpers";
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
        icon: <Building />,
        caption: localizations.archive[locale],
        renderDisplay: (item: any) => {
          const archiveName = item?.related_organizations.find((o: any) => o.type === 'Archives').name
          return displayAttribute(archiveName, locale)
        }
      },
      {
        icon: <MapFill />,
        caption: localizations.archiveLocation[locale],
        // Uh oh. Only one layer of relations is indexed and archive location requires two layers.
        renderDisplay: () => 'WIP'
      },
      {
        uuid: 'eyJhbGciOiJub25lIn0.eyJ1dWlkIjoiNzgzNmIwNGQtYjdhOC00NDNhLWE5MjAtMWNjNzZmMzBlNmVhIiwibGFiZWwiOiJPcmlnaW5hbCBEYXRlIiwiZmFjZXQiOmZhbHNlfQ.',
        icon: <Calendar />,
        caption: localizations.origDate[locale]
      },
      {
        icon: <Book />,
        caption: localizations.works[locale],
        renderDisplay: (item) => item?.related_works ? item.related_works.map((w: { name: string }) => w.name).join(', ') : ''
      }
    ],
    rightPanel: {
      uuid: 'eyJhbGciOiJub25lIn0.eyJ1dWlkIjoiZTQwYzAyNGEtOTg1OS00MDVmLTg2YjktMzA4ZTg5M2ZhYTM3IiwibGFiZWwiOiJUZXh0IiwiZmFjZXQiOmZhbHNlfQ.',
      label: localizations.text[locale]
    },
    headlineUuid: 'e839b342-d5d9-4142-8310-697525d18229',
    renderHeadlineAttribute: (hit: any) => {
      // WIP: need UUID logic here too
      if (hit.catalog_number) {
        return (
          <span>
            #
            <Highlight
              attribute='e839b342-d5d9-4142-8310-697525d18229'
              hit={hit}
              highlightedTagName='mark'
            />
          </span>
        )
      } else {
        return <></>
      }
    }
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
          hitWrapperComponent={hitWrapperComponent}
          getHitWrapperProps={getHitWrapperProps}
        />
      </InstantSearch>
    </GlobalStyle>
  )
}

export default Bischoff;
