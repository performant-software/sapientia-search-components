import {
  SearchBox,
  Configure,
  SortBy,
  RefinementList
} from 'react-instantsearch'
import CustomInfiniteHits from './Hits'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Filter } from 'react-bootstrap-icons'
import Panel from './Panel'
import { SearchDiv } from './Search.styled'
import localizations from '../../lib/localizations'
import CustomCurrentRefinements from './CustomCurrentRefinements'
import { Field, HitField, SortField } from '../../lib/types'
import { getFacets } from '../../lib/search'
import SearchContext from './SearchContext'
import fieldConfig from '../../lib/fields'

interface SearchProps {
  locale: 'en' | 'fr',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  project: 'bischoff' | 'rumpf' | 'supplique'
  getHitWrapperProps?: (...args: any) => any
  sortFields?: SortField[]
}

const Search: React.FC<SearchProps> = (props) => {
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false)
  const [isMobile, setMobile] = useState(true)
  const [fields, setFields] = useState<{ [key: string]: HitField }>({});

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

  // Fetch the schema on first render so we can parse all facets at once.
  useEffect(() => {
    const setup = async () => {
      const results: Field[] = await getFacets(props.project)

      const merged: { [key: string]: HitField } = {}

      Object.keys(fieldConfig[props.project]).forEach(att => {
        // The first check is for whether the attribute names match - as related
        // fields don't have UUIDs, we need to make sure we use the correct
        // attribute name as a key in `fields.ts`.
        // The second check is, more straightforwardly, seeing if there's a field
        // with a matching UUID.
        const matching = results.find(r =>
          (r.uuid && r.uuid === fieldConfig[props.project][att].uuid)
          || r.value === att)

        if (matching) {
          merged[att] = { ...fieldConfig[props.project][att], ...matching }
        }
      })

      setFields(merged)
    }

    setup()
  }, [props.project])

  const sortFields = useMemo(() => {
    if (props.sortFields) {
      const result: SortField[] = []

      props.sortFields.forEach(sf => {
        const split = sf.value.replace('supplique/sort/', '').split(':')
        if (split.length === 2) {
          const attribute = split[0]
          const match = fields[attribute]
          if (match) {
            result.push({
              label: sf.label,
              value: `supplique/sort/${match.value}:${split[1]}`
            })
          }
        } else {
          result.push(sf)
        }
      })

      return result.length > 0 ? result : undefined
    }
  }, [fields, props.sortFields])

  // TODO: this calculates the correct result,
  // but the snippeting feature doesn't seem to work.
  const attributesToSnippet = useMemo(() => (
    Object.values(fields)
      .filter(field => field.snippet && field.value)
      .map(field => `${field.value}:${field.snippet}`)
  ), [fields])

  const refinementLists = useMemo(() => (
    Object.values(fields)
      .filter(field => field.facet && field.displayLabel)
      .map(field => (
        <Panel header={field.displayLabel as string} key={field.value}>
          <RefinementList
            attribute={field.value as string}
          />
        </Panel>
      ))
  ), [fields])

  return (
    <SearchContext.Provider value={{ fields }}>
      <SearchDiv>
        <div className='search'>
          <Configure
            attributesToSnippet={attributesToSnippet}
            hitsPerPage={40}
          />
          <div className='leftPanel'>
            <Panel header={localizations.search[props.locale]}>
              <button
                className='filterButton'
                onClick={() => toggleFilters()}
              >
                <Filter />
              </button>
              <SearchBox
                translations={{ submitButtonTitle: localizations.searchHere[props.locale] }}
              />
            </Panel>
            {refinementLists}
            <div className='filters' ref={filterRef}>
              {sortFields
                ? (
                  <Panel header={localizations.sort[props.locale]}>
                    <SortBy
                      items={sortFields}
                    />
                  </Panel>
                )
                : null
              }
            </div>
          </div>
          <div className='mainPanel'>
            <CustomCurrentRefinements
              locale={props.locale}
            />
            <CustomInfiniteHits
              locale={props.locale}
              onHitClick={props.onHitClick}
              hitWrapperComponent={props.hitWrapperComponent}
              getHitWrapperProps={props.getHitWrapperProps}
            />
          </div>
        </div>
      </SearchDiv>
    </SearchContext.Provider>
  )
}

export default Search
