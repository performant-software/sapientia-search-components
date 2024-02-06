import { createContext } from "react";
import { Field, HitField } from "../../lib/types";

interface SearchContextValue {
  facets: Field[];
  setFacets: (arg: Field[]) => void;
  fields: Array<HitField>;
  fieldsDispatch: (arg: any) => void;
}

const SearchContext = createContext<SearchContextValue>({
  facets: [],
  setFacets: () => null,
  fields: [],
  fieldsDispatch: () => null,
});

export default SearchContext;
