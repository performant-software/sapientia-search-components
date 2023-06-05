import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import Search from "./Search"
import GlobalStyle from "./global.styled"
import { Highlight, RefinementList } from "react-instantsearch-hooks-web"
import Panel from "./Search/Panel"
import localizations from "../lib/localizations"
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import CustomRangeSlider from "./Search/RangeSlider"
import { HitConfig } from "../lib/types"
import { Bank, Building, Calendar4Event, GeoAlt, Person } from "react-bootstrap-icons"
import { displayAttribute, handleDate } from "../lib/react_helpers"

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
  const hitConfig: HitConfig = {
    leftColumnItems: [
      {
        attribute: 'date',
        icon: <Calendar4Event />,
        caption: localizations.date[locale],
        renderDisplay: (item) => handleDate(item)
      },
      {
        attribute: 'town',
        icon: <Building />,
        caption: localizations.city[locale],
        renderDisplay: (item) => displayAttribute(item, 'town.name', locale)
      },
      {
        attribute: 'place_given',
        icon: <GeoAlt />,
        caption: localizations.place_given[locale],
        renderDisplay: (item) => displayAttribute(item, 'date_of_place.name', locale)
      },
      {
        attribute: 'titulature',
        icon: <Bank />,
        caption: localizations.titulature[locale],
        renderDisplay: (item) => displayAttribute(item, 'titulature.full_name', locale)
      },
      {
        attribute: 'commandement',
        icon: <Person />,
        caption: localizations.commandement[locale],
        renderDisplay: (item) => displayAttribute(item, 'commandement.full_name', locale)
      }
    ],
    rightPanel: {
      attribute: 'texte',
      label: localizations.text[locale]
    },
    headlineAttribute: 'number_order',
    renderHeadlineAttribute: (hit) => (
      <span>
        #
        <Highlight
          attribute='number_order'
          hit={hit}
          highlightedTagName='mark'
        />
      </span>
    )
  }

  return (
    <div>
      <GlobalStyle />
      <Search
        searchClient={searchClient}
        locale='fr'
        indexName="textes"
        hitConfig={hitConfig}
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
