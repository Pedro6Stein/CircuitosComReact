import React, { useState } from "react";

function CircuitForm() {
 
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [result, setResult] = useState(null);
  const calculate = (e) => {
    e.preventDefault(); 
  
   
    if (
      (voltage && isNaN(voltage)) ||
      (current && isNaN(current)) ||
      (resistance && isNaN(resistance))
    ) {
      setResult("Por favor, insira valores numéricos.");
      return;
    }
  
    if (
      (voltage && voltage <= 0) ||
      (current && current <= 0) ||
      (resistance && resistance <= 0)
    ) {
      setResult("Por favor, insira valores numéricos positivos.");
      return;
    }
  
   
    if (voltage && current && resistance) {
      setResult(
        "Isso não é um cálculo válido de circuito. Adicione apenas dois valores."
      );
    } else if (voltage && current) {
      setResult(`Resistência calculada: ${(voltage / current).toFixed(2)} Ω`);
    } else if (voltage && resistance) {
      setResult(`Corrente calculada: ${(voltage / resistance).toFixed(2)} A`);
    } else if (current && resistance) {
      setResult(`Tensão calculada: ${(current * resistance).toFixed(2)} V`);
    } else {
      setResult("Por favor, preencha ao menos dois valores!");
    }
  };
  
  

  return (
    <div>
      <h2>Simulador de Circuitos</h2>
      <form onSubmit={calculate}>
        <div>
          <label>Voltagem (V):</label>
          <input
            type="number"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
          />
        </div>
        <div>
          <label>Corrente (A):</label>
          <input
            type="number"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
        </div>
        <div>
          <label>Resistência (Ω):</label>
          <input
            type="number"
            value={resistance}
            onChange={(e) => setResistance(e.target.value)}
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
      {result && <p><strong>Resultado:</strong> {result}</p>}
    </div>
  );
}

export default CircuitForm;
