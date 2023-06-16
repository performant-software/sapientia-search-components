/// <reference types="react" />
import { UseInfiniteHitsProps } from 'react-instantsearch-hooks';
import { HitConfig } from '../../../lib/types';
interface Props extends UseInfiniteHitsProps {
    locale: 'en' | 'fr';
    hitConfig: HitConfig;
    onHitClick?: (arg: any) => void;
}
declare const CustomInfiniteHits: React.FC<Props>;
export default CustomInfiniteHits;
