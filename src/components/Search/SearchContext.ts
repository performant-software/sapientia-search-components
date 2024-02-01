import { createContext } from "react";
import type { Facet } from "../../lib/search";

interface SearchContextValue {
  facets: Facet[];
  setFacets: (arg: Facet[]) => void;
}

const SearchContext = createContext<SearchContextValue>({
  facets: [],
  setFacets: () => null,
});

export default SearchContext;
