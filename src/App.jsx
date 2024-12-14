import React from "react";
import CircuitForm from "./componentes/CircuitForm";
import ResistorCalculator from "./componentes/ResistorCalculator";

function App() {
  return (
    <div>
      <h1>Simulador de Circuitos</h1>
      <CircuitForm />

      <ResistorCalculator />
    </div>
  );
}

export default App;
