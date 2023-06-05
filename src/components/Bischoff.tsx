import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import { useMemo } from "react";
import Search from './Search';
import localizations from "../lib/localizations";
import { Highlight } from "react-instantsearch-hooks-web";
import { Building } from "react-bootstrap-icons";
import { displayAttribute } from "../lib/react_helpers";

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
        renderDisplay: (item: any) => displayAttribute(item, 'archive.name', locale)
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
        locale='fr'
        indexName="bischoff"
        hitConfig={hitConfig}
      >
        <p>hi</p>
      </Search>
    </div>
  )
}

export default Bischoff;
