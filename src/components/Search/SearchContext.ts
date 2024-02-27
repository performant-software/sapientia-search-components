import { createContext } from "react";
import { HitField } from "../../lib/types";

interface SearchContextValue {
  fields: { [key: string]: HitField };
}

const SearchContext = createContext<SearchContextValue>({
  fields: {},
});

export default SearchContext;
