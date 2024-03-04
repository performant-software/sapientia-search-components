import Search from "./Search"
import GlobalStyle from "./global.styled"
import { InstantSearch } from "react-instantsearch"
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import searchClient from "../lib/searchClient"

export interface SuppliqueProps {
  locale: 'fr' | 'en',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const SuppliquePolitique: React.FC<SuppliqueProps> = ({ locale, onHitClick, hitWrapperComponent, getHitWrapperProps }) => {
  return (
    <GlobalStyle>
      <InstantSearch
        indexName={import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_INDEX_NAME}
        searchClient={searchClient}
      >
        <Search
          locale={locale}
          onHitClick={onHitClick}
          project='supplique'
          hitWrapperComponent={hitWrapperComponent}
          getHitWrapperProps={getHitWrapperProps}
        >
          <></>
          {/* <Panel header={localizations.date[locale]}>
            <div className='dateSlider'>
              <p className='header'>{localizations.year[locale]}</p>
              <CustomRangeSlider
                attribute={`${import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_YEAR_UUID}_facet`}
              />
            </div>
            <div className='dateSlider'>
              <p className='header'>{localizations.month[locale]}</p>
              <CustomRangeSlider
                attribute={`${import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_MONTH_UUID}_facet`}
              />
            </div>
            <div className='dateSlider'>
              <p className='header'>{localizations.day[locale]}</p>
              <CustomRangeSlider
                attribute={`${import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_DAY_UUID}_facet`}
              />
            </div>
          </Panel> */}
        </Search>
      </InstantSearch>
    </GlobalStyle>
  )
}

export default SuppliquePolitique;
