import { secondsScales } from "../constants";
import type InputRow from "../types/InputRow";
import type Unit from "../types/Unit";

export function formatSeconds(seconds: number, units: Unit[]) {
  let format: InputRow = {};

  let remainder = seconds;

  for (let unit of units) {
    format[unit] = Math.floor(remainder / secondsScales[unit]);
    remainder %= secondsScales[unit];
  }

  return format;
}
