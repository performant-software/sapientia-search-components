import {
  SearchBox,
  Configure,
  RefinementList
} from 'react-instantsearch'
import CustomInfiniteHits from './Hits'
import { ReactElement, useMemo } from 'react'
import Panel from './Panel'
import { SearchDiv } from './Search.styled'
import localizations from '../../lib/localizations'
import CustomCurrentRefinements from './CustomCurrentRefinements'
import fields from '../../lib/fields'
import SearchContext from './SearchContext'

interface SearchProps {
  locale: 'en' | 'fr',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  project: 'bischoff' | 'rumpf' | 'supplique',
  getHitWrapperProps?: (...args: any) => any,
  children?: ReactElement<any, string>
}

const Search: React.FC<SearchProps> = (props) => {
  const projectFields = fields[props.project];

  const refinementLists = useMemo(() => (
    Object.entries(projectFields)
      .filter(field => field[1].facet && field[1].caption)
      .map(field => (
        <Panel header={field[1].caption![props.locale] as string} key={field[0]}>
          <RefinementList
            attribute={`${field[0]}_facet`}
          />
        </Panel>
      )
      )
  ), [projectFields, props.locale])

  return (
    <SearchContext.Provider value={{ fields: projectFields }}>
      <SearchDiv>
        <div className='search'>
          <Configure
            hitsPerPage={20}
          />
          <div className='leftPanel'>
            <Panel header={localizations.search[props.locale]}>
              <SearchBox
                translations={{ submitButtonTitle: localizations.searchHere[props.locale] }}
              />
            </Panel>
            {props.children}
            {refinementLists}
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
