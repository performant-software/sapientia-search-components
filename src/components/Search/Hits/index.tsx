import HitComponent from './Hit'
import localizations from '../../../lib/localizations'
import { useEffect, useState } from 'react'
import { UseInfiniteHitsProps, useInfiniteHits } from 'react-instantsearch-core'

interface Props extends UseInfiniteHitsProps {
  locale: 'en' | 'fr',
  onHitClick?: (arg: any) => void,
  hitWrapperComponent?: React.FC,
  getHitWrapperProps?: (...args: any) => any
}

const CustomInfiniteHits: React.FC<Props> = (props) => {
  const {
    hits,
    isLastPage,
    showMore,
  } = useInfiniteHits(props);

  const { locale } = props;

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading && hits.length > 0) {
      setIsLoading(false)
    }
  }, [hits, isLoading])

  if (isLoading) {
    return <p className='center'>{localizations.loading[locale]}</p>
  }

  if (hits.length === 0) {
    return <p className='center'>{localizations.noResults[locale]}</p>
  }

  const handleButton = () => {
    if (!isLastPage) {
      return (
        <button
          onClick={() => showMore()}
          className='ais-InfiniteHits-loadMore'
        >
          {localizations.showMore[locale]}
        </button>
      )
    } else {
      return (
        <button
          disabled
          className='ais-InfiniteHits-loadMore'
        >
          {localizations.showMore[locale]}
        </button>
      )
    }
  }

  return (
    <>
      <ul className='hitList'>
        {hits.map((hit) => (
          <HitComponent
            key={hit.id as number}
            locale={locale}
            hit={hit}
            onHitClick={props.onHitClick}
            hitWrapperComponent={props.hitWrapperComponent}
            getHitWrapperProps={props.getHitWrapperProps}
          />
        ))}
      </ul>
      {handleButton()}
    </>
  )
}

export default CustomInfiniteHits
