import { ReactElement } from "react";
interface Props {
    header: string;
    children: ReactElement | ReactElement[];
}
declare const Panel: React.FC<Props>;
export default Panel;
