/// <reference types="react" />
import { UseInfiniteHitsProps } from 'react-instantsearch-core';
import { HitConfig } from '../../../lib/types';
interface Props extends UseInfiniteHitsProps {
    locale: 'en' | 'fr';
    hitConfig: HitConfig;
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    getHitWrapperProps?: (...args: any) => any;
}
declare const CustomInfiniteHits: React.FC<Props>;
export default CustomInfiniteHits;
