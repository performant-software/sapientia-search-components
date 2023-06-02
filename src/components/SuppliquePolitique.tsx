import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import Search from "./Search"
import GlobalStyle from "./global.styled"
import { RefinementList } from "react-instantsearch-hooks-web"
import Panel from "./Search/Panel"
import localizations from "../lib/localizations"
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import CustomRangeSlider from "./Search/RangeSlider"

const searchClient = instantMeiliSearch(
  import.meta.env.VITE_APP_MEILI_URL,
  // This is a search-only key that is meant to be used in production
  import.meta.env.VITE_APP_MEILI_KEY,
  {
      primaryKey: 'id'
  }
)

interface Props {
  locale: 'fr' | 'en'
}

const SuppliquePolitique: React.FC<Props> = ({ locale }) => {
  return (
    <div>
      <GlobalStyle />
      <Search
        searchClient={searchClient}
        locale='fr'
        indexName="textes"
      >
        <Panel header={localizations.number_of_order[locale]}>
          <CustomRangeSlider
              attribute='number_order'
          />
        </Panel>
        <Panel header={localizations.date[locale]}>
          <div className='dateSlider'>
            <p className='header'>{localizations.year[locale]}</p>
            <CustomRangeSlider
                attribute='year'
            />
          </div>
          <div className='dateSlider'>
            <p className='header'>{localizations.month[locale]}</p>
            <CustomRangeSlider
                attribute='month'
            />
          </div>
          <div className='dateSlider'>
            <p className='header'>{localizations.day[locale]}</p>
            <CustomRangeSlider
                attribute='day'
            />
          </div>
        </Panel>
        <Panel header={localizations.city[locale]}>
          <RefinementList
            attribute='town.name'
          />
        </Panel>
        <Panel header={localizations.place_given[locale]}>
          <RefinementList
            attribute='date_of_place.name'
          />
        </Panel>
        <Panel header={localizations.titulature[locale]}>
          <RefinementList
            attribute='titulature.full_name'
          />
          </Panel>
        <Panel header={localizations.commandement[locale]}>
          <RefinementList
            attribute='commandement.full_name'
          />
        </Panel>
        <Panel header={localizations.keywords[locale]}>
          <RefinementList
              attribute='keywords'
              operator='or'
          />
        </Panel>
      </Search>
    </div>
  )
}

export default SuppliquePolitique;
