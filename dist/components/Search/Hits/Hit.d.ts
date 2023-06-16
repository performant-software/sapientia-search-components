import { HitConfig } from '../../../lib/types';
interface Props {
    hit: any;
    hitConfig: HitConfig;
    locale: 'en' | 'fr';
    onHitClick?: (arg: any) => void;
}
declare const Hit: ({ hit, hitConfig, onHitClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default Hit;
