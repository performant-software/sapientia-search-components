/// <reference types="react" />
interface Props {
    hit: any;
    locale: 'en' | 'fr';
    onHitClick?: (arg: any) => void;
    hitWrapperComponent?: React.FC;
    getHitWrapperProps?: (...args: any) => any;
}
declare const Hit: ({ hit, onHitClick, hitWrapperComponent, getHitWrapperProps, locale }: Props) => import("react/jsx-runtime").JSX.Element;
export default Hit;
