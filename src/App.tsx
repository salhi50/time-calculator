import React from "react";
import Intro from "components/Intro";

const App: React.FC = () => {
  return (
    <div className="container py-5" style={{ maxWidth: 700 }}>
      <Intro />
    </div>
  );
};

export default App;
