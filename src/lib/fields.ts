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

const fields: { [key: string]: HitField[] } = {
  bischoff: [
    {
      attribute: "catalogNumber",
      uuid: "e839b342-d5d9-4142-8310-697525d18229",
      type: "identifier",
    },
    {
      attribute: "originalDate",
      uuid: "7836b04d-b7a8-443a-a920-1cc76f30e6ea",
      caption: localizations.origDate,
      icon: Calendar,
    },
    {
      attribute: "text",
      uuid: "e40c024a-9859-405f-86b9-308e893faa37",
      type: "showcase",
      caption: localizations.text,
    },
    {
      attribute: "relatedOrganizations",
      icon: Building,
      caption: localizations.archive,
      render: (item: any) =>
        item?.related_organizations.find((o: any) => o.type === "Archives")
          ?.name,
    },
    {
      attribute: "archiveLocation",
      icon: MapFill,
      caption: localizations.archiveLocation,
      // Uh oh. Only one layer of relations is indexed and archive location requires two layers.
      render: () => "TODO",
    },
    {
      attribute: "originalDate",
      icon: Calendar,
      caption: localizations.origDate,
    },
    {
      attribute: "relatedWorks",
      icon: Book,
      caption: localizations.works,
      render: (item: any) =>
        item?.related_works
          ? item.related_works.map((w: { name: string }) => w.name)
          : undefined,
    },
  ],
  rumpf: [
    {
      attribute: "publicationDate",
      uuid: "fda80804-8753-4b15-8e11-3d291585cc79",
      icon: Calendar,
      caption: localizations.publicationDate,
    },
    {
      attribute: "line",
      uuid: "8412f5df-4d50-42ab-bf04-4ddddc32217f",
      icon: FileEarmarkTextFill,
      caption: localizations.line,
    },
    {
      attribute: "format",
      uuid: "4de71c17-308a-41ed-bc0e-19f4f7aee55c",
      icon: Folder,
      caption: localizations.format,
    },
    {
      attribute: "publication_location",
      icon: Pin,
      caption: localizations.publicationLocation,
      render: () => "todo",
    },
    {
      attribute: "parent_edition",
      icon: ArrowBarUp,
      caption: localizations.parentEdition,
      render: () => "todo",
    },
    {
      attribute: "author",
      icon: Person,
      caption: localizations.author,
      render: (item: any) =>
        item?.related_people?.find(
          (p: { type: string }) => p.type === "Authors"
        )?.name,
    },
    {
      attribute: "archives",
      icon: Bank,
      caption: localizations.archive,
      render: (item: any) =>
        item?.related_organizations?.find(
          (p: { type: string }) => p.type === "Archives"
        )?.name,
    },
  ],
  supplique: [
    {
      attribute: "text",
      uuid: "e40c024a-9859-405f-86b9-308e893faa37",
      type: "showcase",
      caption: localizations.text,
    },
    {
      attribute: "numberOrder",
      uuid: "e247c848-08af-4bbd-bdd1-eed94b776c12",
      type: "identifier",
      caption: localizations.number_of_order,
    },
    {
      attribute: "date",
      icon: Calendar4Event,
      caption: localizations.date,
      render: (item) => handleDate(item),
    },
    {
      attribute: "city",
      icon: Building,
      caption: localizations.city,
      render: (item: any) =>
        item?.related_places?.find(
          (pl: { type: string }) => pl.type === "Ville"
        )?.name,
    },
    {
      attribute: "date_of_place",
      icon: GeoAlt,
      caption: localizations.place_given,
      render: (item: any) =>
        item?.related_places?.find(
          (pl: { type: string }) => pl.type === "Date de place"
        )?.name,
    },
    {
      attribute: "titulature",
      icon: Bank,
      caption: localizations.titulature,
      render: (item: any) =>
        item?.related_people?.find(
          (p: { type: string }) => p.type === "Titulature"
        )?.name,
    },
    {
      attribute: "commandement",
      icon: Person,
      caption: localizations.commandement,
      render: (item: any) =>
        item?.related_people?.find(
          (p: { type: string }) => p.type === "Commandement"
        )?.name,
    },
  ],
};

export default fields;
