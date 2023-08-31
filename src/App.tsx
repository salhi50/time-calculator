import React from "react";
import Intro from "components/Intro";
import TimeCalculator from "components/TimeCalculator";

const App: React.FC = () => {
  return (
    <div className="container py-5" style={{ maxWidth: 800 }}>
      <Intro />
      <TimeCalculator />
    </div>
  );
};

export default App;
