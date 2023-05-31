import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import Search from "./Search"

const searchClient = instantMeiliSearch(
  import.meta.env.VITE_APP_MEILI_URL,
  // This is a search-only key that is meant to be used in production
  import.meta.env.VITE_APP_MEILI_KEY,
  {
      primaryKey: 'id'
  }
)

const SuppliquePolitique: React.FC = () => {
  return (
    <Search
      searchClient={searchClient}
      locale='fr'
      facets={[]}
      indexName="textes"
    />
  )
}

export default SuppliquePolitique;
