/// <reference types="react" />
import type { Facet } from "../../lib/search";
interface SearchContextValue {
    facets: Facet[];
    setFacets: (arg: Facet[]) => void;
}
declare const SearchContext: import("react").Context<SearchContextValue>;
export default SearchContext;
