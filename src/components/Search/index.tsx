import {
    InstantSearch,
    SearchBox,
    Configure,
    SortBy
} from 'react-instantsearch-hooks-web'
import CustomHits from './Hits'
// import CustomCurrentRefinements from './CustomCurrentRefinements'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { Filter } from 'react-bootstrap-icons'
import Panel from './Panel'
import { SearchDiv } from './Search.styled'
import localizations from '../../lib/localizations'
import { InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch'
import CustomCurrentRefinements from './CustomCurrentRefinements'

interface Props {
    locale: 'en' | 'fr',
    children: ReactElement | ReactElement[],
    searchClient: InstantMeiliSearchInstance,
    indexName: string
}

const Search: React.FC<Props> = ({ indexName, locale, children, searchClient }) => {
    const [displayFilterMenu, setDisplayFilterMenu] = useState(false)
    const [isMobile, setMobile] = useState(true)

    const filterRef = useRef<HTMLDivElement>(null)

    const toggleFilters = () => {
        if (filterRef.current) {
            if (isMobile) {
                setDisplayFilterMenu(!displayFilterMenu)
            }
        }
    }

    // This hook keeps track of whether the user is on a mobile device.
    useEffect(() => {
        const handler = (e: { matches: boolean | ((prevState: boolean) => boolean) }) => setMobile(e.matches)

        const query = window.matchMedia('(max-width: 800px)')
        query.addEventListener('change', handler)

        // Set initial value
        setMobile(query.matches)

        return () => query.removeEventListener('change', handler)
    }, [])

    // Default for mobile is to not show it, default for desktop is to show it.
    // This hook switches to the default for the corresponding platform when the screen is resized.
    useEffect(() => {
        if (filterRef.current) {
            if (isMobile) {
                setDisplayFilterMenu(false)
            } else {
                setDisplayFilterMenu(true)
            }
        }
    }, [isMobile])

    useEffect(() => {
        if (filterRef.current) {
            if (displayFilterMenu) {
                filterRef.current.style.transform = 'translateX(0)'
            } else {
                filterRef.current.style.transform = 'translateX(-120vw)'
            }
        }
    }, [displayFilterMenu])

    return (
        <SearchDiv>
            <div className='search'>
                <InstantSearch
                    indexName={indexName}
                    searchClient={searchClient}
                >
                    <Configure
                        attributesToSnippet={['texte:75']}
                        hitsPerPage={20}
                    />
                    <div className='leftPanel'>
                        <Panel header={localizations.search[locale]}>
                            <button
                                className='filterButton'
                                onClick={() => toggleFilters()}
                            >
                                <Filter />
                            </button>
                            <SearchBox
                                translations={{ submitButtonTitle: localizations.searchHere[locale] }}
                            />
                        </Panel>
                        <div className='filters' ref={filterRef}>
                            <Panel header={localizations.sort[locale]}>
                                <SortBy
                                    items={[
                                        { value: 'textes', label: localizations.relevance[locale] },
                                        { value: 'textes:timestamp:asc', label: localizations.chronologicalAsc[locale] },
                                        { value: 'textes:timestamp:desc', label: localizations.chronologicalDesc[locale] },
                                        { value: 'textes:number_order:asc', label: localizations.numberOrderAsc[locale] },
                                        { value: 'textes:number_order:desc', label: localizations.numberOrderDesc[locale] }
                                    ]}
                                />
                            </Panel>
                        </div>
                        {children}
                    </div>
                    <div className='mainPanel'>
                        <CustomCurrentRefinements
                            locale={locale}
                        />
                        <CustomHits
                            locale={locale}
                        />
                    </div>
                </InstantSearch>
            </div>
        </SearchDiv>
    )
}

export default Search
