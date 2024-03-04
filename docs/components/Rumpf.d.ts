/// <reference types="react" />
export interface RumpfProps {
    locale: 'fr' | 'en';
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    getHitWrapperProps?: (...args: any) => any;
}
declare const Rumpf: React.FC<RumpfProps>;
export default Rumpf;
