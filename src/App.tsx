import React from "react";
import DNAtoRNAConverter from "./components/DNAtoRNAConverter";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <DNAtoRNAConverter />
    </div>
  );
};

export default App;
