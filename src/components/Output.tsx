import React from "react";
import TimeCalculatorContext from "../TimeCalculatorContext";

const Output: React.FC = () => {
  const { getOutput } = React.useContext(TimeCalculatorContext);

  return (
    <>
      <div className="hstack gap-2">
        <span>=</span>
        <div className="hstack gap-1 flex-wrap">
          {Object.entries(getOutput()).map(([unit, value]) => (
            <span key={unit}>
              <strong>{value}</strong> {unit}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Output;
