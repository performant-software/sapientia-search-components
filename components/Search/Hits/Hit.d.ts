/// <reference types="react" />
import { HitConfig } from '../../../lib/types';
interface Props {
    hit: any;
    hitConfig: HitConfig;
    locale: 'en' | 'fr';
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    getHitWrapperProps?: (...args: any) => any;
}
declare const Hit: ({ hit, hitConfig, onHitClick, hitWrapperComponent, getHitWrapperProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default Hit;
