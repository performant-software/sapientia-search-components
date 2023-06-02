import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import Search from "./Search"
import GlobalStyle from "./global.styled"
import { RefinementList } from "react-instantsearch-hooks-web"
import Panel from "./Search/Panel"
import localizations from "../lib/localizations"
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import CustomRangeSlider from "./Search/RangeSlider"

const searchClient = instantMeiliSearch(
  import.meta.env.VITE_APP_MEILI_URL,
  // This is a search-only key that is meant to be used in production
  import.meta.env.VITE_APP_MEILI_KEY,
  {
      primaryKey: 'id'
  }
)

const SuppliquePolitique: React.FC = () => {
  // Will be dynamic later
  const locale = 'fr'

  return (
    <div>
      <GlobalStyle />
      <Search
        searchClient={searchClient}
        locale='fr'
        indexName="textes"
      >
        <Panel header={localizations.city[locale]}>
          <RefinementList
              attribute='town.name'
          />
        </Panel>
        <Panel header={localizations.place_given[locale]}>
          <RefinementList
              attribute='date_of_place.name'
          />
        </Panel>
        <Panel header={localizations.month[locale]}>
          <CustomRangeSlider
              attribute='month'
            />
        </Panel>
      </Search>
    </div>
  )
}

export default SuppliquePolitique;
