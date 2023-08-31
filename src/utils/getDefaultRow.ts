import type InputRow from "../types/InputRow";
import type Unit from "../types/Unit";

export default function getDefaultRow(formats: Unit[]) {
  let row: InputRow = {};
  for (let k of formats) {
    row[k as keyof InputRow] = 0;
  }
  return row;
}
