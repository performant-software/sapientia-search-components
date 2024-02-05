import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import Search from "./Search";
import { useMemo } from "react";
import { ArrowBarUp, Bank, BarChart, Calendar, FileEarmarkTextFill, Folder, Person, Pin } from "react-bootstrap-icons";
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
        uuid: 'fda80804-8753-4b15-8e11-3d291585cc79',
        icon: <Calendar />,
        caption: localizations.publicationDate[locale]
      },
      {
        icon: <Pin />,
        caption: localizations.publicationLocation[locale],
        // TODO
      },
      {
        icon: <ArrowBarUp />,
        caption: localizations.parentEdition[locale]
        // TODO
      },
      {
        uuid: '21adc2bf-6970-4927-91de-cc476ab2e352',
        icon: <FileEarmarkTextFill />,
        caption: localizations.line[locale]
      },
      {
        caption: localizations.format[locale],
        icon: <Folder />,
        uuid: '4de71c17-308a-41ed-bc0e-19f4f7aee55c'
      },
      {
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
      uuid: 'title'
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
          hitWrapperComponent={hitWrapperComponent}
          getHitWrapperProps={getHitWrapperProps}
        />
      </InstantSearch>
    </GlobalStyle>
  )
}

export default Rumpf;
