import {
    CurrentPageProps,
    Document
} from './types'

import {
    type CurrentRefinementsConnectorParamsItem
} from 'instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements'

export const isDocument = (item: CurrentPageProps): item is Document => {
    if ((item as Document).number_order) {
        return true
    } else {
        return false
    }
}

export const isNumberRefinement = (ref: CurrentRefinementsConnectorParamsItem): boolean => {
    if (ref.refinements[0].type === 'numeric') {
        return true
    } else {
        return false
    }
}
