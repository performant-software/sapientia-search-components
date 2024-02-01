import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import Search from "./Search";
import { useMemo } from "react";
import { ArrowBarUp, Bank, BarChart, Calendar, FileEarmarkTextFill, Folder, Person, Pin, TextParagraph } from "react-bootstrap-icons";
import localizations from "../lib/localizations";
import { displayAttribute, displayNestedAttribute } from "../lib/reactHelpers";
import { InstantSearch } from "react-instantsearch";
import searchClient from "../lib/searchClient";

export interface RumpfProps {
  locale: 'fr' | 'en',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const Rumpf: React.FC<RumpfProps> = ({ locale, onHitClick, hitWrapperComponent, getHitWrapperProps }) => {
  const hitConfig = useMemo(() => ({
    leftColumnItems: [
      {
        attribute: 'generic_title',
        icon: <TextParagraph />,
        caption: localizations.genericTitle[locale]
      },
      {
        attribute: 'publication_date',
        icon: <Calendar />,
        caption: localizations.publicationDate[locale]
      },
      {
        attribute: 'publication_location.name',
        icon: <Pin />,
        caption: localizations.publicationLocation[locale],
        renderDisplay: (item: any) => displayNestedAttribute(item, 'publication_location.name', locale)
      },
      {
        attribute: 'parent_edition.title',
        icon: <ArrowBarUp />,
        caption: localizations.parentEdition[locale],
        renderDisplay: (item: any) => displayNestedAttribute(item, 'parent_edition.title', locale)
      },
      {
        attribute: 'status',
        icon: <BarChart />,
        caption: localizations.status[locale],
        renderDisplay: (item: any) => displayAttribute(item, 'status', locale)
      },
      {
        attribute: 'line',
        icon: <FileEarmarkTextFill />,
        caption: localizations.line[locale],
        renderDisplay: (item: any) => displayAttribute(item, 'line', locale)
      },
      {
        attribute: 'format',
        icon: <Folder />,
        caption: localizations.format[locale],
        renderDisplay: (item: any) => displayAttribute(item, 'format', locale)
      },
      {
        attribute: 'author_id.full_name',
        icon: <Person />,
        caption: localizations.author[locale],
        renderDisplay: (item: any) => displayNestedAttribute(item, 'author_id.full_name', locale)
      },
      {
        attribute: 'archives',
        icon: <Bank />,
        caption: localizations.archive[locale],
        render: (item: any) => item.archives.join(', ')
      }
    ],
    rightPanel: {
      attribute: 'title'
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
