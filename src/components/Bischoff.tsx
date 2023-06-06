import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import { useMemo } from "react";
import Search from './Search';
import localizations from "../lib/localizations";
import { Highlight, RefinementList } from "react-instantsearch-hooks-web";
import { Book, Building, Calendar, MapFill } from "react-bootstrap-icons";
import { displayAttribute } from "../lib/react_helpers";
import Panel from "./Search/Panel";

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

const Bischoff: React.FC<Props> = ({ locale }) => {
  const hitConfig = useMemo(() => ({
    leftColumnItems: [
      {
        attribute: 'archive.name',
        icon: <Building />,
        caption: localizations.archive[locale],
        renderDisplay: (item: any) => displayAttribute(item, 'archive', locale)
      },
      {
        attribute: 'OrigDate',
        icon: <Calendar />,
        caption: localizations.origDate[locale]
      },
      {
        attribute: 'origPlace',
        icon: <MapFill />,
        caption: localizations.origPlace[locale]
      },
      {
        attribute: 'works',
        icon: <Book />,
        caption: localizations.works[locale],
        renderDisplay: (item) => item.works.map((w: { title: string }) => w.title).join(', ')
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
  }}), [locale])

  return (
    <div>
      <GlobalStyle />
      <Search
        searchClient={searchClient}
        locale={locale}
        indexName="bischoff"
        hitConfig={hitConfig}
      >
        <Panel header={localizations.works[locale]}>
          <RefinementList
            attribute="works.title"
          />
        </Panel>
        <Panel header={localizations.origDate[locale]}>
          <RefinementList
            attribute="OrigDate"
          />
        </Panel>
        <Panel header={localizations.origPlace[locale]}>
          <RefinementList
            attribute="origPlace"
          />
        </Panel>
        <Panel header={localizations.sections[locale]}>
          <RefinementList
            attribute="sections.shelfmark_sections_id.name"
          />
        </Panel>
        <Panel header={localizations.provenance[locale]}>
          <RefinementList
            attribute="provenance"
          />
        </Panel>
        <Panel header={localizations.archive[locale]}>
          <RefinementList
              attribute="archive"
            />
        </Panel>
        <Panel header={localizations.shelfmarks[locale]}>
          <RefinementList
            attribute="shelfmark"
          />
        </Panel>
        <Panel header={localizations.formerShelfmarks[locale]}>
          <RefinementList
            attribute="former_shelfmark"
          />
        </Panel>
      </Search>
    </div>
  )
}

export default Bischoff;
