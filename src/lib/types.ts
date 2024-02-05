import { ReactElement } from "react";

export enum FacetTypes {
  Number = "number",
  String = "string",
}

export interface StringFacet {
  name: string;
  type: FacetTypes;
  label: { en: string; fr: string };
}

export interface NumberFacet extends StringFacet {
  limits: [number, number];
}

export type Facet = StringFacet | NumberFacet;

export interface HitLeftColumnItem {
  caption: string;
  icon: ReactElement;
  uuid?: string;
  render?: (item: any) => string | undefined;
}

export interface HitConfig {
  leftColumnItems: HitLeftColumnItem[];
  rightPanel: {
    uuid?: string;
    label?: string;
  };
  identifierUuid?: string;
  sortFields?: {
    value: string;
    label: string;
  }[];
}
