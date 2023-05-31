import { SearchResult } from '../../../lib/supplique_types'
import HitComponent from './Hit'
import localizations from '../../../lib/localizations'
import { useEffect, useState } from 'react'
import { UseInfiniteHitsProps, useInfiniteHits } from 'react-instantsearch-hooks'

interface Props extends UseInfiniteHitsProps {
    locale: 'en' | 'fr'
}

const CustomInfiniteHits: React.FC<Props> = (props) => {
    const {
        hits,
        currentPageHits,
        results,
        isFirstPage,
        isLastPage,
        showPrevious,
        showMore,
        sendEvent,
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

    console.log(hits)

    return (
        <>
            <ul className='hitList'>
                {/* {hits.map((hit) => <HitComponent key={hit.id} locale={locale} hit={hit} />)} */}
            </ul>
            {handleButton()}
        </>
    )
}

export default CustomInfiniteHits
