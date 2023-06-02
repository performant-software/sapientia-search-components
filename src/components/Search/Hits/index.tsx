import HitComponent from './Hit'
import localizations from '../../../lib/localizations'
import { useEffect, useState } from 'react'
import { UseInfiniteHitsProps, useInfiniteHits } from 'react-instantsearch-hooks'
import { HitConfig } from '../../../lib/types'

interface Props extends UseInfiniteHitsProps {
    locale: 'en' | 'fr',
    hitConfig: HitConfig
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
                        hitConfig={props.hitConfig}
                    />
                ))}
            </ul>
            {handleButton()}
        </>
    )
}

export default CustomInfiniteHits
