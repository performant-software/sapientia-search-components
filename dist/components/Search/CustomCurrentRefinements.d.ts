/// <reference types="react" />
import { CurrentRefinementsConnectorParams } from 'instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements';
interface Props extends CurrentRefinementsConnectorParams {
    locale: 'en' | 'fr';
}
declare const CustomCurrentRefinements: React.FC<Props>;
export default CustomCurrentRefinements;
