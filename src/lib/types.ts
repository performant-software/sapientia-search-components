import { ParsedUrlQuery } from 'querystring'

export type Locale = 'en' | 'fr'

export interface Page {
    id: number,
    title_en: string,
    title_fr: string,
    slug_en: string,
    slug_fr: string,
    content_en: string,
    content_fr: string
}

export interface LocalizedPage {
    localeTitle: string,
    localeSlug: string,
    localeContent: string
}

export interface StaticPaths {
    params: {
        locale: Locale,
        slug: string
    }
}

export interface StaticDocumentPaths {
    params: {
        locale: Locale,
        numberOrder: string
    }
}

export interface PageParams extends ParsedUrlQuery {
    locale: Locale,
    slug: string
}

export interface DocumentParams extends ParsedUrlQuery {
    locale: Locale,
    numberOrder: string
}

export interface HomePageParams extends ParsedUrlQuery {
    locale: Locale
}

export interface SearchResult {
    id: number,
    number_order: number,
    'town.name': string,
    year: number,
    month: number,
    day: number,
    timestamp: number,
    'date_of_place.name': string,
    'titulature.first_name': string,
    'titulature.last_name': string,
    'titulature.full_name': string,
    'commandement.first_name': string,
    'commandement.last_name': string,
    'commandement.full_name': string,
    texte: string,
    summary: string,
    _highlightResult: any,
    _snippetResult: any,
    objectID: number,
    __position: number
}

export interface Person {
    title: string | null,
    first_name: string | null,
    last_name: string | null
}

export interface Place {
    name: string
}

export interface Document {
    id: number,
    number_order: number,
    year: number,
    month: number,
    day: number,
    summary: string,
    references: {
        reference: string
    }[],
    comments: string,
    texte: string,
    town: Place,
    date_of_place: Place,
    titulature: Person | null,
    commandement: Person | null
}

export enum FacetTypes {
    Number = 'number',
    String = 'string'
}

export interface StringFacet {
    name: string,
    type: FacetTypes,
    label: { en: string, fr: string }
}

export interface NumberFacet extends StringFacet {
    limits: [number, number]
}

export type Facet = StringFacet | NumberFacet

export type CurrentPageProps = Document | Page | 'search'

interface BaseRefinement {
    attribute: string
}

export interface StringRefinement extends BaseRefinement {
    currentRefinement: string[]
}

export interface NumberRefinement extends BaseRefinement {
    currentRefinement: {
        min: number,
        max: number
    }
}

export type Refinement = StringRefinement | NumberRefinement