/// <reference types="react" />
export interface BischoffProps {
    locale: 'fr' | 'en';
    onHitClick?: (arg: any) => void;
}
declare const Bischoff: React.FC<BischoffProps>;
export default Bischoff;
