import { type CurrentRefinementsConnectorParamsItem } from "instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements";

export const isNumberRefinement = (
  ref: CurrentRefinementsConnectorParamsItem
): boolean => {
  if (ref.refinements[0].type === "numeric") {
    return true;
  } else {
    return false;
  }
};
