import React from "react";
import { defaultOutputFormat } from "./constants";
import InputRow from "./types/InputRow";
import Unit from "./types/Unit";
import getDefaultRow from "./utils/getDefaultRow";

type ContextValue = {
  outputFormat: Unit[];
  inputRows: InputRow[];
  setOutputFormat: React.Dispatch<React.SetStateAction<Unit[]>>;
  updateRow: (rowIndex: number, newRow: InputRow) => void;
  addNewRow: () => void;
  deleteRow: (rowIndex: number) => void;
  getOutput: () => InputRow;
};

const TimeCalculatorContext = React.createContext<ContextValue>({
  outputFormat: defaultOutputFormat,
  inputRows: [],
  setOutputFormat: () => {},
  updateRow: () => {},
  addNewRow: () => {},
  deleteRow: () => {},
  getOutput: () => getDefaultRow(defaultOutputFormat),
});

export default TimeCalculatorContext;
