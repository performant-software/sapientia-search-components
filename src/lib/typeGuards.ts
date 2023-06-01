import {
    CurrentPageProps,
    Document,
    NumberRefinement,
    Refinement
} from './types'

export const isDocument = (item: CurrentPageProps): item is Document => {
    if ((item as Document).number_order) {
        return true
    } else {
        return false
    }
}

export const isNumberRefinement = (ref: Refinement): ref is NumberRefinement => {
    if ((ref as NumberRefinement).currentRefinement.min) {
        return true
    } else {
        return false
    }
}
