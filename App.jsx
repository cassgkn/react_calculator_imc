import { useState, useEffect } from "react";
import './App.css';


function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [status, setStatus] = useState('');


  useEffect(() => {
    if (imc !== null) {
      if (imc < 18.5) {
        setStatus('Abaixo do peso');
      } else if (imc >= 18.5 && imc < 24.9) {
        setStatus('Peso normal');
      } else if (imc >= 25 && imc < 29.9) {
        setStatus('Sobrepeso');
      } else {
        setStatus('Obesidade');
      }
    }
  }, [imc]);

  const calcularImc = () => {
    if (peso && altura) {
      const alturaMetros = altura;
      const novoImc = (peso / (alturaMetros ** 2)).toFixed(2);
      setImc(novoImc);
    }
  };

  const resetarPesquisa = () => {
    setPeso('');
    setAltura('');
    setImc(null);
    setStatus('');
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Calculadora IMC</h1>
        <label>Peso:</label>
        <input type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)} 
        />
        <label>Altura:</label>
        <input type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)} 
        />
        <button onClick={calcularImc}>Calcular IMC</button>
        <button onClick={resetarPesquisa}>Resetar IMC</button>
        {imc !== null && (
          <div>
            <h2>Seu IMC é: {imc}</h2>
            <p>Status: {status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
