import { Field, HitField } from "../../lib/types";

const fieldsReducer = (fields: Array<HitField>, newFields: Field[]) =>
  fields.map((field: HitField) => {
    const matching = newFields.find((nf) => nf.uuid === field.uuid);

    if (matching) {
      return {
        ...matching,
        ...field,
      };
    } else {
      return field;
    }
  });

export default fieldsReducer;
