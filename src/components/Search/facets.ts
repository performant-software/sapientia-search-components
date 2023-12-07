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
    },
    {
        name: 'works.title',
        type: FacetTypes.String,
        label: locale.works
    },
    {
        name: 'OrigDate',
        type: FacetTypes.String,
        label: locale.origDate
    },
    {
        name: 'origPlace',
        type: FacetTypes.String,
        label: locale.origPlace
    },
    {
        name: 'sections.shelfmark_sections_id.name',
        type: FacetTypes.String,
        label: locale.shelfmarkSections
    },
    {
        name: 'provenance',
        type: FacetTypes.String,
        label: locale.provenance
    },
    {
        name: 'archive',
        type: FacetTypes.String,
        label: locale.archive
    },
    {
        name: 'archive_place',
        type: FacetTypes.String,
        label: locale.archiveLocation
    },
    {
        name: 'shelfmark',
        type: FacetTypes.String,
        label: locale.shelfmarks
    },
    {
        name: 'former_shelfmark',
        type: FacetTypes.String,
        label: locale.formerShelfmarks
    },
    {
        name: 'status',
        type: FacetTypes.String,
        label: locale.status
    },
    {
        name: 'author_id.full_name',
        type: FacetTypes.String,
        label: locale.author
    },
    {
        name: 'format',
        type: FacetTypes.String,
        label: locale.format
    },
    {
        name: 'type',
        type: FacetTypes.String,
        label: locale.type
    },
    {
        name: 'publication_date',
        type: FacetTypes.String,
        label: locale.publicationDate
    },
    {
        name: 'publication_location.name',
        type: FacetTypes.String,
        label: locale.publicationLocation
    },
    {
        name: 'archives',
        type: FacetTypes.String,
        label: locale.archive
    }
]

export default facets
