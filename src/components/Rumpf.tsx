import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import Search from "./Search";
import { InstantSearch } from "react-instantsearch";
import searchClient from "../lib/searchClient";

export interface RumpfProps {
  locale: 'fr' | 'en',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const Rumpf: React.FC<RumpfProps> = ({ locale, onHitClick, hitWrapperComponent, getHitWrapperProps }) => (
  <GlobalStyle>
    <InstantSearch
      indexName={import.meta.env.VITE_APP_TYPESENSE_RUMPF_INDEX_NAME}
      searchClient={searchClient}
    >
      <Search
        locale={locale}
        onHitClick={onHitClick}
        project='rumpf'
        hitWrapperComponent={hitWrapperComponent}
        getHitWrapperProps={getHitWrapperProps}
      />
    </InstantSearch>
  </GlobalStyle>
)


export default Rumpf;
