import React from "react";
import TimeCalculatorContext from "../TimeCalculatorContext";

const Input: React.FC = ({}) => {
  const { inputRows, updateRow, addNewRow, deleteRow } = React.useContext(TimeCalculatorContext);

  return (
    <div className="vstack gap-2">
      {/* Rows */}
      {inputRows.map((row, indx) => (
        <div key={indx} className="hstack gap-2 align-items-stretch flex-wrap">
          {/* Columns */}
          {Object.entries(row).map(([unit, value]) => (
            <div key={unit} className="hstack gap-1 p-1" style={{ backgroundColor: "lightyellow" }}>
              <input
                style={{ width: 40, backgroundColor: "transparent" }}
                className="form-control form-control-sm shadow-none border-0 fw-medium"
                placeholder="00"
                value={value}
                onChange={(e) => updateRow(indx, { ...row, [unit]: e.target.value })}
              />
              <small>{unit}</small>
            </div>
          ))}
          {/* Delete row button */}
          <button className="btn btn-light btn-sm" onClick={() => deleteRow(indx)}>
            x
          </button>
        </div>
      ))}
      {/* Button add row */}
      <div className="hstack gap-2 align-self-start">
        <button onClick={addNewRow} className="btn btn-light btn-sm">
          + row
        </button>
      </div>
    </div>
  );
};

export default Input;
