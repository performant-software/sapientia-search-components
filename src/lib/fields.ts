import {
  ArrowBarUp,
  Bank,
  Book,
  Building,
  Calendar,
  Calendar4Event,
  FileEarmarkTextFill,
  Folder,
  GeoAlt,
  Person,
  Pin,
} from "react-bootstrap-icons";
import localizations from "./localizations";
import { HitField } from "./types";
import { displayRelation, handleDate } from "./reactHelpers";

const fields: { [key: string]: { [key: string]: HitField } } = {
  bischoff: {
    [import.meta.env.VITE_APP_TYPESENSE_BISCHOFF_CATALOG_NUMBER_UUID]: {
      type: "identifier",
    },
    [import.meta.env.VITE_APP_TYPESENSE_BISCHOFF_ORIGINAL_DATE_UUID]: {
      caption: localizations.origDate,
      icon: Calendar,
    },
    [import.meta.env.VITE_APP_TYPESENSE_BISCHOFF_TEXT_UUID]: {
      type: "showcase",
      caption: localizations.text,
    },
    [`${import.meta.env.VITE_APP_TYPESENSE_BISCHOFF_ARCHIVES_UUID}.names`]: {
      icon: Building,
      caption: localizations.archive,
      facet: true,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_BISCHOFF_ARCHIVES_UUID
        ),
    },
    [`${import.meta.env.VITE_APP_TYPESENSE_BISCHOFF_WORKS_UUID}.names`]: {
      icon: Book,
      facet: true,
      caption: localizations.works,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_BISCHOFF_WORKS_UUID
        ),
    },
  },
  rumpf: {
    [import.meta.env.VITE_APP_TYPESENSE_RUMPF_PUBLICATION_DATE_UUID]: {
      icon: Calendar,
      caption: localizations.publicationDate,
    },
    [import.meta.env.VITE_APP_TYPESENSE_RUMPF_LINE_UUID]: {
      icon: FileEarmarkTextFill,
      facet: true,
      caption: localizations.line,
    },
    [import.meta.env.VITE_APP_TYPESENSE_RUMPF_FORMAT_UUID]: {
      icon: Folder,
      caption: localizations.format,
      facet: true,
    },
    [`${
      import.meta.env.VITE_APP_TYPESENSE_RUMPF_PUBLICATION_LOCATION_UUID
    }.names`]: {
      icon: Pin,
      caption: localizations.publicationLocation,
      facet: true,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_RUMPF_PUBLICATION_LOCATION_UUID
        ),
    },
    [`${import.meta.env.VITE_APP_TYPESENSE_RUMPF_PARENT_EDITION_UUID}.names`]: {
      icon: ArrowBarUp,
      caption: localizations.parentEdition,
      facet: true,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_RUMPF_PARENT_EDITION_UUID
        ),
    },
    [`${import.meta.env.VITE_APP_TYPESENSE_RUMPF_AUTHORS_UUID}.names`]: {
      icon: Person,
      facet: true,
      caption: localizations.author,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_RUMPF_AUTHORS_UUID
        ),
    },
    [`${import.meta.env.VITE_APP_TYPESENSE_RUMPF_ARCHIVES_UUID}.names`]: {
      icon: Bank,
      caption: localizations.archive,
      facet: true,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_RUMPF_ARCHIVES_UUID
        ),
    },
    name: {
      caption: localizations.title,
      type: "showcase",
    },
  },
  supplique: {
    [import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_TEXT_UUID]: {
      type: "showcase",
      caption: localizations.text,
      snippet: 75,
    },
    [import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_NUMBER_ORDER_UUID]: {
      type: "identifier",
      caption: localizations.number_of_order,
    },
    date: {
      icon: Calendar4Event,
      caption: localizations.date,
      render: (item) => handleDate(item),
    },
    [`${import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_CITY_UUID}.names`]: {
      icon: Building,
      caption: localizations.city,
      facet: true,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_CITY_UUID
        ),
    },
    [`${
      import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_DATE_OF_PLACE_UUID
    }.names`]: {
      icon: GeoAlt,
      caption: localizations.place_given,
      facet: true,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_DATE_OF_PLACE_UUID
        ),
    },
    [`${import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_TITULATURE_UUID}.names`]: {
      icon: Bank,
      caption: localizations.titulature,
      facet: true,
      render: (hit: any) =>
        displayRelation(
          hit,
          import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_TITULATURE_UUID
        ),
    },
    [`${import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_COMMANDEMENT_UUID}.names`]:
      {
        icon: Person,
        caption: localizations.commandement,
        facet: true,
        render: (hit: any) =>
          displayRelation(
            hit,
            import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_COMMANDEMENT_UUID
          ),
      },
    [`${import.meta.env.VITE_APP_TYPESENSE_SUPPLIQUE_KEYWORDS_UUID}.name`]: {
      caption: localizations.keywords,
      facet: true,
    },
  },
};

export default fields;
