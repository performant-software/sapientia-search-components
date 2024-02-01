export interface Facet {
    value: string;
    displayLabel: string;
    show: boolean;
    uuid?: string;
    isUserDefined: boolean;
}
export declare const parseFacet: (value: string) => Facet;
export declare const filterFacets: (facets: string[], options: {
    include?: string[];
    exclude?: string[];
}) => string[];
