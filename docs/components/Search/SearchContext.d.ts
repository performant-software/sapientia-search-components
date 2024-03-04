/// <reference types="react" />
import { HitField } from "../../lib/types";
interface SearchContextValue {
    fields: {
        [key: string]: HitField;
    };
}
declare const SearchContext: import("react").Context<SearchContextValue>;
export default SearchContext;
