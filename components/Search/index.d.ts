/// <reference types="react" />
import { SortField } from '../../lib/types';
interface SearchProps {
    locale: 'en' | 'fr';
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    project: 'bischoff' | 'rumpf' | 'supplique';
    getHitWrapperProps?: (...args: any) => any;
    sortFields?: SortField[];
}
declare const Search: React.FC<SearchProps>;
export default Search;
