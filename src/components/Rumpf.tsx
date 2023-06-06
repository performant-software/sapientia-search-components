import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'

interface Props {
  locale: 'fr' | 'en'
}

const Rumpf: React.FC<Props> = ({ locale }) => {
  return (
    <div>
      <GlobalStyle />
      <p>coming soon!</p>
    </div>
  )
}

export default Rumpf;
