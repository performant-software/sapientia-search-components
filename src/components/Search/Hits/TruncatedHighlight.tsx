import { HighlightProps } from 'react-instantsearch-core'
import { connectHighlight } from 'react-instantsearch-dom'
import localizations from '../../../helpers/localizations'

interface Props extends HighlightProps {
    locale: 'en' | 'fr'
}

const TruncatedHighlight: React.FC<Props> = ({ locale, highlight, attribute, hit }) => {
    const parsedHit = highlight({
        highlightProperty: '_highlightResult',
        attribute,
        hit
    })

    if (!hit[attribute]) {
        return <span><em>{localizations.emptyField[locale]}</em></span>
    }

    return (
        <span>
            {parsedHit.map(
                (part, index) =>
                    part.isHighlighted ? (
                        <mark key={index}>{part.value}</mark>
                    ) : (
                        <span key={index}>{part.value}</span>
                    )
            )}
            {hit[attribute].length > 200 ? '...' : null}
        </span>
    )
}

const CustomHighlight = connectHighlight(TruncatedHighlight)

export default CustomHighlight
