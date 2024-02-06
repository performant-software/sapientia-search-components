import { Calendar, FileEarmarkTextFill, Folder } from "react-bootstrap-icons";
import localizations from "./localizations";
import { HitField } from "./types";

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
  ],
  rumpf: [
    {
      attribute: "publicationDate",
      uuid: "fda80804-8753-4b15-8e11-3d291585cc79",
      icon: Calendar,
    },
    {
      attribute: "line",
      uuid: "21adc2bf-6970-4927-91de-cc476ab2e352",
      icon: FileEarmarkTextFill,
    },
    {
      attribute: "format",
      uuid: "4de71c17-308a-41ed-bc0e-19f4f7aee55c",
      icon: Folder,
    },
  ],
  supplique: [
    {
      attribute: "text",
      uuid: "e40c024a-9859-405f-86b9-308e893faa37",
      type: "showcase",
    },
    {
      attribute: "numberOrder",
      uuid: "e247c848-08af-4bbd-bdd1-eed94b776c12",
      type: "identifier",
    },
  ],
};

export default fields;
