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
  MapFill,
  Person,
  Pin,
} from "react-bootstrap-icons";
import localizations from "./localizations";
import { HitField } from "./types";
import { handleDate } from "./reactHelpers";

const fields: { [key: string]: { [key: string]: HitField } } = {
  bischoff: {
    catalogNumber: {
      uuid: "e839b342-d5d9-4142-8310-697525d18229",
      type: "identifier",
    },
    originalDate: {
      uuid: "7836b04d-b7a8-443a-a920-1cc76f30e6ea",
      caption: localizations.origDate,
      icon: Calendar,
    },
    text: {
      uuid: "e40c024a-9859-405f-86b9-308e893faa37",
      type: "showcase",
      caption: localizations.text,
    },
    "related_organizations.names": {
      icon: Building,
      caption: localizations.archive,
      facet: true,
      render: (item: any) =>
        item?.related_organizations.find((o: any) => o.type === "Archives")
          ?.name,
    },
    archiveLocation: {
      icon: MapFill,
      caption: localizations.archiveLocation,
      // Uh oh. Only one layer of relations is indexed and archive location requires two layers.
      render: () => "TODO",
    },
    "related_works.names": {
      icon: Book,
      facet: true,
      caption: localizations.works,
      render: () => "todo",
    },
  },
  rumpf: {
    publicationDate: {
      uuid: "fda80804-8753-4b15-8e11-3d291585cc79",
      icon: Calendar,
      caption: localizations.publicationDate,
    },
    line: {
      uuid: "8412f5df-4d50-42ab-bf04-4ddddc32217f",
      icon: FileEarmarkTextFill,
      facet: true,
      caption: localizations.line,
    },
    format: {
      uuid: "4de71c17-308a-41ed-bc0e-19f4f7aee55c",
      icon: Folder,
      caption: localizations.format,
      facet: true,
    },
    "related_places.names": {
      icon: Pin,
      caption: localizations.publicationLocation,
      facet: true,
      render: (item: any) =>
        item?.related_places?.find(
          (pl: { type: string }) => pl.type === "Publication Location"
        )?.name,
    },
    parentEdition: {
      icon: ArrowBarUp,
      caption: localizations.parentEdition,
      render: () => "todo",
    },
    "related_people.names": {
      icon: Person,
      facet: true,
      caption: localizations.author,
      render: (item: any) =>
        item?.related_people?.find(
          (p: { type: string }) => p.type === "Authors"
        )?.name,
    },
    "related_organizations.names": {
      icon: Bank,
      caption: localizations.archive,
      facet: true,
      render: (item: any) =>
        item?.related_organizations?.find(
          (p: { type: string }) => p.type === "Archives"
        )?.name,
    },
    name: {
      caption: localizations.title,
      type: "showcase",
      value: "name",
    },
  },
  supplique: {
    text: {
      uuid: "0ce611e4-4622-4160-8857-28ee7c915a8e",
      type: "showcase",
      caption: localizations.text,
      snippet: 75,
    },
    numberOrder: {
      uuid: "e247c848-08af-4bbd-bdd1-eed94b776c12",
      type: "identifier",
      caption: localizations.number_of_order,
    },
    date: {
      icon: Calendar4Event,
      caption: localizations.date,
      render: (item) => handleDate(item),
    },
    city: {
      icon: Building,
      caption: localizations.city,
      render: (item: any) =>
        item?.related_places?.find(
          (pl: { type: string }) => pl.type === "Ville"
        )?.name,
    },
    dateOfPlace: {
      icon: GeoAlt,
      caption: localizations.place_given,
      render: (item: any) =>
        item?.related_places?.find(
          (pl: { type: string }) => pl.type === "Date de place"
        )?.name,
    },
    titulature: {
      icon: Bank,
      caption: localizations.titulature,
      render: (item: any) =>
        item?.related_people?.find(
          (p: { type: string }) => p.type === "Titulature"
        )?.name,
    },
    commandement: {
      icon: Person,
      caption: localizations.commandement,
      render: (item: any) =>
        item?.related_people?.find(
          (p: { type: string }) => p.type === "Commandement"
        )?.name,
    },
  },
};

export default fields;
