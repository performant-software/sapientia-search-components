import {
  SearchBox,
  Configure,
  SortBy,
  useDynamicWidgets,
  RefinementList
} from 'react-instantsearch'
import CustomInfiniteHits from './Hits'
import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Filter } from 'react-bootstrap-icons'
import Panel from './Panel'
import { SearchDiv } from './Search.styled'
import localizations from '../../lib/localizations'
import CustomCurrentRefinements from './CustomCurrentRefinements'
import { Field, SortField } from '../../lib/types'
import { parseFacet } from '../../lib/search'
import SearchContext from './SearchContext'
import fieldData from '../../lib/fields'
import fieldsReducer from './fieldsReducer'

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
  const [facets, setFacets] = useState<Field[]>([]);
  const [fields, fieldsDispatch] = useReducer(fieldsReducer, fieldData[props.project]);

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


  const { attributesToRender } = useDynamicWidgets({
    facets: ["*"]
  });

  useEffect(() => {
    setFacets(attributesToRender.map((att) => parseFacet(att)));
  }, [attributesToRender]);

  const sortFields = useMemo(() => {
    if (props.sortFields) {
      const result: SortField[] = []

      props.sortFields.forEach(sf => {
        const split = sf.value.replace('supplique/sort/', '').split(':')
        if (split.length === 2) {
          const attribute = split[0]
          const match = fields.find(f => f.attribute === attribute)
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

  return (
    <SearchContext.Provider value={{ facets, setFacets, fields, fieldsDispatch }}>
      <SearchDiv>
        <div className='search'>
          <Configure
            attributesToSnippet={['texte:75']}
            hitsPerPage={20}
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
            {facets.map(f => (
              <Panel header={f.displayLabel} key={f.value}>
                <RefinementList
                  attribute={f.value}
                />
              </Panel>
            ))}
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
