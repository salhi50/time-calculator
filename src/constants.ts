import type Unit from "./types/Unit";

export const secondsScales = {
  years: 31622400,
  months: 2635200,
  weeks: 604800,
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1,
};

export const units: Unit[] = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

export const defaultInputFormat: Unit[] = units;
export const defaultOutputFormat: Unit[] = ["hours", "minutes", "seconds"];
