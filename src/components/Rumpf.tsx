import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import Search from "./Search";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { useMemo } from "react";
import { ArrowBarUp, Bank, BarChart, Calendar, FileEarmarkTextFill, Folder, Person, Pin, TextParagraph } from "react-bootstrap-icons";
import localizations, { getLocalizedValues } from "../lib/localizations";
import { displayAttribute, displayNestedAttribute, handleDate } from "../lib/react_helpers";
import Panel from "./Search/Panel";
import { RefinementList } from "react-instantsearch-hooks-web";

const searchClient = instantMeiliSearch(
  import.meta.env.VITE_APP_MEILI_URL,
  // This is a search-only key that is meant to be used in production
  import.meta.env.VITE_APP_MEILI_KEY,
  {
      primaryKey: 'id'
  }
)

interface Props {
  locale: 'fr' | 'en'
}

const Rumpf: React.FC<Props> = ({ locale }) => {
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
    <div>
      <GlobalStyle />
      <Search
        searchClient={searchClient}
        locale={locale}
        indexName="rumpf"
        hitConfig={hitConfig}
      >
        <Panel header={localizations.status[locale]}>
          <RefinementList
            attribute="status"
            transformItems={items => getLocalizedValues(items, locale)}
          />
        </Panel>
        <Panel header={localizations.author[locale]}>
          <RefinementList
            attribute="author_id.full_name"
          />
        </Panel>
        <Panel header={localizations.format[locale]}>
          <RefinementList
            attribute="format"
            transformItems={items => getLocalizedValues(items, locale)}
          />
        </Panel>
        <Panel header={localizations.type[locale]}>
          <RefinementList
            attribute="type"
            transformItems={items => getLocalizedValues(items, locale)}
          />
        </Panel>
        <Panel header={localizations.publicationDate[locale]}>
          <RefinementList
            attribute="publication_date"
          />
        </Panel>
        <Panel header={localizations.publicationLocation[locale]}>
          <RefinementList
            attribute="publication_location.name"
          />
        </Panel>
        <Panel header={localizations.archive[locale]}>
          <RefinementList
            attribute="archives"
          />
        </Panel>
      </Search>
    </div>
  )
}

export default Rumpf;
