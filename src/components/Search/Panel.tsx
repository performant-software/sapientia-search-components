import { ReactElement } from "react";
import { PanelDiv } from "./Panel.styled";

interface Props {
  header: string,
  children: ReactElement | ReactElement[]
}

const styles = {
  header: {
    fontSize: '0.75rem'
  }
}

const Panel: React.FC<Props> = ({ header, children }) => {
  return (
    <PanelDiv>
      { header ? <span style={styles.header}>{ header }</span> : null }
      { children }
    </PanelDiv>
  )
}

export default Panel;
