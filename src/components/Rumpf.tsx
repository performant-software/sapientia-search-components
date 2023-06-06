import GlobalStyle from "./global.styled";
import 'instantsearch.css/themes/reset.css'
import 'instantsearch.css/themes/satellite.css'
import Search from "./Search";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { useMemo } from "react";
import { Calendar, Pin, TextParagraph } from "react-bootstrap-icons";
import localizations from "../lib/localizations";
import { displayAttribute, displayNestedAttribute, handleDate } from "../lib/react_helpers";

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

const Rumpf: React.FC<Props> = ({ locale }) => {
  const hitConfig = useMemo(() => ({
    leftColumnItems: [
      {
        attribute: 'generic_title',
        icon: <TextParagraph />,
        caption: localizations.genericTitle[locale]
      },
      {
        attribute: 'publication_date',
        icon: <Calendar />,
        caption: localizations.publicationDate[locale],
        render: (item: any) => handleDate(item)
      },
      {
        attribute: 'publication_location.name',
        icon: <Pin />,
        caption: localizations.publicationLocation[locale],
        render: (item: any) => displayNestedAttribute(item, 'publication_location.name', locale)
      }
    ],
    rightPanel: {
      attribute: 'title',
      label: localizations.title[locale]
    }
  }), [locale])

  return (
    <div>
      <GlobalStyle />
      <Search
        searchClient={searchClient}
        locale={locale}
        indexName="rumpf"
        hitConfig={hitConfig}
      >

      </Search>
    </div>
  )
}

export default Rumpf;
