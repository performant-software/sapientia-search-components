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
    query_by: "name",
  },
});

export default searchAdapter.searchClient;
