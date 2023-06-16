import { ReactElement } from 'react';
import { InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch';
import { HitConfig } from '../../lib/types';
interface Props {
    locale: 'en' | 'fr';
    children: ReactElement | ReactElement[];
    searchClient: InstantMeiliSearchInstance;
    indexName: string;
    hitConfig: HitConfig;
    onHitClick?: (arg: any) => void;
}
declare const Search: React.FC<Props>;
export default Search;
