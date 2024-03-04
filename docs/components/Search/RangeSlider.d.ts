import { UseRangeProps } from 'react-instantsearch-core';
interface Props extends UseRangeProps {
    renderValue?: (arg: number) => string;
}
declare const CustomRangeSlider: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default CustomRangeSlider;
