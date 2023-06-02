import { ReactElement } from "react";
import { PanelDiv } from "./Panel.styled";

interface Props {
  header: string,
  children: ReactElement | ReactElement[]
}

const Panel: React.FC<Props> = ({ header, children }) => {
  return (
    <PanelDiv>
      { header ? <span className='header'>{ header }</span> : null }
      { children }
    </PanelDiv>
  )
}

export default Panel;
