import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const handleCalculate = async () => {
    try {
      const response = await fetch('http://localhost:8080/imcCalculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          peso: parseFloat(peso),
          altura: parseFloat(altura),
        }),
      });
      const data = await response.json();
      setResultado(`IMC: ${data.imc}`);
    } catch (error) {
      console.error('Erro ao calcular IMC:', error);
      setResultado('Erro ao calcular IMC');
    }
  };

  const handleConstrucao = async () => {

    alert("Funcionalidade em Desenvolvimento")

  }

  return (
    <div className="imc-calculator">
      <h2 className="imc-title">Calculadora de IMC</h2>
      <div className="imc-input-group">
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite o peso"
        />
      </div>
      <div className="imc-input-group">
        <label htmlFor="altura">Altura (m):</label>
        <input
          type="number"
          id="altura"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite a altura"
        />
      </div>
      <button className="imc-button" onClick={handleConstrucao}>Calcular IMC</button>
      <div className="imc-result">{resultado}</div>
    </div>
  );
};

export default Calculator;
