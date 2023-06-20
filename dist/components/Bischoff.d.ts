/// <reference types="react" />
export interface BischoffProps {
    locale: 'fr' | 'en';
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    getHitWrapperProps?: (...args: any) => any;
}
declare const Bischoff: React.FC<BischoffProps>;
export default Bischoff;
