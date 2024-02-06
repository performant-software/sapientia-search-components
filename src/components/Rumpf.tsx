import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import Search from "./Search";
import { useMemo } from "react";
import { ArrowBarUp, Bank, Calendar, FileEarmarkTextFill, Folder, Person, Pin } from "react-bootstrap-icons";
import localizations from "../lib/localizations";
import { InstantSearch } from "react-instantsearch";
import searchClient from "../lib/searchClient";
import { HitConfig } from "../lib/types";

export interface RumpfProps {
  locale: 'fr' | 'en',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const Rumpf: React.FC<RumpfProps> = ({ locale, onHitClick, hitWrapperComponent, getHitWrapperProps }) => {
  const hitConfig: HitConfig = useMemo(() => ({
    leftColumnItems: [
      {
        attribute: 'publicationDate',
        icon: <Calendar />,
        caption: localizations.publicationDate[locale]
      },
      {
        attribute: 'publication_location',
        icon: <Pin />,
        caption: localizations.publicationLocation[locale],
        render: () => 'todo'
      },
      {
        attribute: 'parent_edition',
        icon: <ArrowBarUp />,
        caption: localizations.parentEdition[locale],
        render: () => 'todo'
      },
      {
        attribute: 'line',
        icon: <FileEarmarkTextFill />,
        caption: localizations.line[locale]
      },
      {
        attribute: 'format',
        caption: localizations.format[locale],
        icon: <Folder />
      },
      {
        attribute: 'author',
        icon: <Person />,
        caption: localizations.author[locale],
        render: (item: any) => item?.related_people?.find((p: { type: string }) => p.type === 'Authors')?.name
      },
      {
        attribute: 'archives',
        icon: <Bank />,
        caption: localizations.archive[locale],
        render: (item: any) => item?.related_organizations?.find((p: { type: string }) => p.type === 'Archives')?.name
      }
    ],
    rightPanel: {
      attribute: 'name'
    }
  }), [locale])

  return (
    <GlobalStyle>
      <InstantSearch
        indexName={import.meta.env.VITE_APP_TYPESENSE_RUMPF_INDEX_NAME}
        searchClient={searchClient}
      >
        <Search
          locale={locale}
          hitConfig={hitConfig}
          onHitClick={onHitClick}
          project='rumpf'
          hitWrapperComponent={hitWrapperComponent}
          getHitWrapperProps={getHitWrapperProps}
        />
      </InstantSearch>
    </GlobalStyle>
  )
}

export default Rumpf;
