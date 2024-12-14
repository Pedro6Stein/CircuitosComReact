import { useState } from "react";

const ResistorCalculator = () => {
  const [resistors, setResistors] = useState(""); 
  const [type, setType] = useState("series");
  const [result, setResult] = useState(""); 

  
  const handleResistorsChange = (e) => {
    setResistors(e.target.value);
  };

  
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

 
  const calculate = (e) => {
    e.preventDefault(); 

   
    const resistorValues = resistors
      .split(",")
      .map((value) => parseFloat(value.trim()))
      .filter((value) => !isNaN(value) && value > 0);

    if (resistorValues.length < 2) {
      setResult("Por favor, insira pelo menos dois valores de resistência separados por vírgula.");
      return;
    }

    let equivalentResistance;
    if (type === "series") {
     
      equivalentResistance = resistorValues.reduce((a, b) => a + b, 0);
    } else if (type === "paralelo") {
      
      equivalentResistance = 1 / resistorValues.reduce((a, b) => a + 1 / b, 0);
    } else {
      setResult("Tipo de cálculo inválido.");
      return;
    }

   
    setResult(`Resistência equivalente: ${equivalentResistance.toFixed(2)} Ω`);
  };

  return (
    <div>
      <h2>Calculadora de Resistores</h2>
      <form onSubmit={calculate}>
        <label>
          Insira os valores (separados por vírgulas):{" "}
          <input
            type="text"
            value={resistors}
            onChange={handleResistorsChange}
            placeholder="Ex.: 10, 20, 30"
          />
        </label>
        <br />

        <label>
          Selecione o tipo de cálculo:{" "}
          <select value={type} onChange={handleTypeChange}>
            <option value="series">Série</option>
            <option value="paralelo">Paralelo</option>
          </select>
        </label>
        <br />

        <button type="submit">Calcular</button>
      </form>

      {result && <p>Resultado: {result}</p>}
    </div>
  );
};

export default ResistorCalculator;
