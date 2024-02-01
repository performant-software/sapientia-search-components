/// <reference types="react" />
import { HitConfig } from '../../lib/types';
interface SearchProps {
    locale: 'en' | 'fr';
    hitConfig: HitConfig;
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    getHitWrapperProps?: (...args: any) => any;
}
declare const Search: React.FC<SearchProps>;
export default Search;
