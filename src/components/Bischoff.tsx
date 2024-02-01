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
        attribute: 'archive.name',
        icon: <Building />,
        caption: localizations.archive[locale],
        renderDisplay: (item: any) => displayAttribute(item, 'archive', locale)
      },
      {
        attribute: 'archive_place',
        icon: <MapFill />,
        caption: localizations.archiveLocation[locale]
      },
      {
        attribute: 'OrigDate',
        icon: <Calendar />,
        caption: localizations.origDate[locale]
      },
      {
        attribute: 'works',
        icon: <Book />,
        caption: localizations.works[locale],
        renderDisplay: (item) => item?.works ? item.works.map((w: { title: string }) => w.title).join(', ') : ''
      }
    ],
    rightPanel: {
      attribute: 'text',
      label: localizations.text[locale]
    },
    headlineAttribute: 'catalog_number',
    renderHeadlineAttribute: (hit: any) => {
      if (hit.catalog_number) {
        return (
          <span>
            #
            <Highlight
              attribute='catalog_number'
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
