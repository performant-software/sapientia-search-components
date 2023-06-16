import { CurrentPageProps, Document } from './types';
import { type CurrentRefinementsConnectorParamsItem } from 'instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements';
export declare const isDocument: (item: CurrentPageProps) => item is Document;
export declare const isNumberRefinement: (ref: CurrentRefinementsConnectorParamsItem) => boolean;
