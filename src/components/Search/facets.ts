import locale from '../../lib/localizations'
import {
    FacetTypes,
    Facet
} from '../../lib/supplique_types'

const facets: Facet[] = [
    {
        name: 'number_order',
        type: FacetTypes.Number,
        label: locale.number_of_order,
        limits: [1, 600]
    },
    {
        name: 'year',
        type: FacetTypes.Number,
        label: locale.year,
        limits: [1380, 1460]
    },
    {
        name: 'month',
        type: FacetTypes.Number,
        label: locale.month,
        limits: [1, 12]
    },
    {
        name: 'day',
        type: FacetTypes.Number,
        label: locale.day,
        limits: [1, 31]
    },
    {
        name: 'town.name',
        type: FacetTypes.String,
        label: locale.city
    },
    {
        name: 'date_of_place.name',
        type: FacetTypes.String,
        label: locale.place_given
    },
    {
        name: 'titulature.full_name',
        type: FacetTypes.String,
        label: locale.titulature
    },
    {
        name: 'commandement.full_name',
        type: FacetTypes.String,
        label: locale.commandement
    },
    {
        name: 'keywords',
        type: FacetTypes.String,
        label: locale.keywords
    }
]

export default facets
