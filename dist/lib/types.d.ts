import { ReactElement } from "react";
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
interface HitLeftColumnItem {
    attribute: string;
    icon: ReactElement;
    caption: string;
    renderDisplay?: (arg: any) => string | ReactElement;
}
export interface HitConfig {
    leftColumnItems: HitLeftColumnItem[];
    rightPanel: {
        attribute: string;
        label?: string;
    };
    headlineAttribute?: string;
    renderHeadlineAttribute?: (arg: any) => string | ReactElement;
    sortFields?: {
        value: string;
        label: string;
    }[];
}
export {};