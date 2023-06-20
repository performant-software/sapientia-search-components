/// <reference types="react" />
export interface SuppliqueProps {
    locale: 'fr' | 'en';
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    getHitWrapperProps?: (...args: any) => any;
}
declare const SuppliquePolitique: React.FC<SuppliqueProps>;
export default SuppliquePolitique;
