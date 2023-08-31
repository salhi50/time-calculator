import React from "react";
import { formatSeconds } from "../utils/formatSeconds";
import { defaultInputFormat, defaultOutputFormat, secondsScales, units } from "../constants";
import getDefaultRow from "../utils/getDefaultRow";

import type InputRow from "../types/InputRow";
import type Unit from "../types/Unit";

import Output from "./Output";
import TimeCalculatorContext from "../TimeCalculatorContext";
import Input from "./Input";
import FormCheck from "./FormCheck";

const TimeCalculator: React.FC = () => {
  // Format should be in order, from years to seconds
  const [outputFormat, setOutputFormat] = React.useState<Unit[]>(defaultOutputFormat);
  const [inputRows, setInputRows] = React.useState<InputRow[]>([
    getDefaultRow(defaultInputFormat),
    getDefaultRow(defaultInputFormat),
  ]);

  const updateRow = (rowIndex: number, newRow: (typeof inputRows)[number]) => {
    setInputRows((rows) =>
      rows.map((row, index) => {
        if (index === rowIndex) return newRow;
        return row;
      }),
    );
  };

  const addNewRow = () => {
    setInputRows((rows) => {
      return [...rows, getDefaultRow(defaultInputFormat)];
    });
  };

  const deleteRow = (rowIndex: number) => {
    setInputRows((rows) => rows.filter((_, indx) => indx !== rowIndex));
  };

  const getOutput = () => {
    let totalTimeInSeconds = 0;
    for (let row of inputRows) {
      Object.entries(row).forEach(([unit, value]) => {
        value = isNaN(parseInt(value.toString(), 10)) ? 0 : parseInt(value.toString(), 10);
        totalTimeInSeconds += secondsScales[unit as Unit] * value;
      });
    }
    return formatSeconds(totalTimeInSeconds, outputFormat);
  };

  return (
    <TimeCalculatorContext.Provider
      value={{
        updateRow,
        setOutputFormat,
        deleteRow,
        getOutput,
        addNewRow,
        outputFormat,
        inputRows,
      }}
    >
      <hr />
      <Input />
      <hr />
      <Output />
      <div className="bg-light p-3 mt-3">
        <label className="form-label">Output format</label>
        <div className="hstack gap-2 flex-wrap">
          {units.map((unit) => (
            <FormCheck
              label={unit}
              key={unit}
              defaultChecked={outputFormat.includes(unit)}
              onChange={(e) =>
                setOutputFormat(
                  e.target.checked
                    ? [...outputFormat, unit].sort((a, b) => units.indexOf(a) - units.indexOf(b))
                    : outputFormat.filter((e) => e !== unit),
                )
              }
            />
          ))}
        </div>
      </div>
    </TimeCalculatorContext.Provider>
  );
};

export default TimeCalculator;
