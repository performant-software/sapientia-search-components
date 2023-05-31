import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

if (!import.meta.env.VITE_APP_PUBLIC_MEILI_BASE_URL) {
    throw new Error('Missing search base URL')
}

if (!import.meta.env.VITE_APP_MEILI_SEARCH_KEY) {
    throw new Error('Missing search API key')
}

const searchClient = instantMeiliSearch(
    import.meta.env.VITE_APP_PUBLIC_MEILI_BASE_URL,
    // This is a search-only key that is meant to be used in production
    import.meta.env.VITE_APP_MEILI_SEARCH_KEY,
    {
        primaryKey: 'id'
    }
)

export default searchClient