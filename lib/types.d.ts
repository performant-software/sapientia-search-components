import { Icon } from "react-bootstrap-icons";
export declare enum FacetTypes {
    Number = "number",
    String = "string"
}
export interface StringFacet {
    name: string;
    type: FacetTypes;
    label: {
        en: string;
        fr: string;
    };
}
export interface NumberFacet extends StringFacet {
    limits: [number, number];
}
export type Facet = StringFacet | NumberFacet;
export interface Field {
    value: string;
    displayLabel: string;
    show: boolean;
    uuid?: string;
    isUserDefined: boolean;
}
export interface HitField {
    caption?: {
        en: string;
        fr: string;
    };
    displayLabel?: string;
    facet?: boolean;
    icon?: Icon;
    isUserDefined?: boolean;
    show?: boolean;
    snippet?: number;
    render?: (hit: any) => string;
    type?: "identifier" | "showcase";
    uuid?: string;
    value?: string;
}
export interface SortField {
    label: string;
    value: string;
}
