/// <reference types="react" />
interface SearchProps {
    locale: 'en' | 'fr';
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    project: 'bischoff' | 'rumpf' | 'supplique';
    getHitWrapperProps?: (...args: any) => any;
}
declare const Search: React.FC<SearchProps>;
export default Search;
