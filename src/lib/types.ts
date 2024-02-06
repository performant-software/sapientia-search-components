import { ReactElement } from "react";
import { Icon } from "react-bootstrap-icons";

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

export interface Field {
  value: string;
  displayLabel: string;
  show: boolean;
  uuid?: string;
  isUserDefined: boolean;
}

export interface HitField {
  attribute: string;
  caption?: { en: string; fr: string };
  icon?: Icon;
  uuid: string;
  value?: string;
  displayLabel?: string;
  show?: boolean;
  isUserDefined?: boolean;
  type?: "identifier" | "showcase";
}

export interface HitLeftColumnItem {
  caption: string;
  icon: ReactElement;
  attribute: string;
  render?: (item: any) => string | undefined;
}

export interface HitConfig {
  leftColumnItems: HitLeftColumnItem[];
  rightPanel: {
    attribute: string;
    label?: string;
  };
  identifierAttribute?: string;
  sortFields?: {
    value: string;
    label: string;
  }[];
}
