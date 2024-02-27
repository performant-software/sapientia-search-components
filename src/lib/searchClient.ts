import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

const searchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: import.meta.env.VITE_APP_TYPESENSE_SEARCH_KEY,
    nodes: [
      {
        host: import.meta.env.VITE_APP_TYPESENSE_HOST,
        port: import.meta.env.VITE_APP_TYPESENSE_PORT,
        protocol: import.meta.env.VITE_APP_TYPESENSE_PROTOCOL,
      },
    ],
  },
  additionalSearchParameters: {
    // We might not want to search by all fields, but the
    // alternative was to figure out a way to set this
    // after the UUIDs are mapped to JWTs, which
    // sounds pretty complex!
    query_by: "*",
    // Snippet functionality
    highlight_affix_num_tokens: 40,
  },
});

export default searchAdapter.searchClient;
