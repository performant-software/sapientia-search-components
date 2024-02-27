/// <reference types="react" />
import { UseInfiniteHitsProps } from 'react-instantsearch-core';
interface Props extends UseInfiniteHitsProps {
    locale: 'en' | 'fr';
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    getHitWrapperProps?: (...args: any) => any;
}
declare const CustomInfiniteHits: React.FC<Props>;
export default CustomInfiniteHits;
