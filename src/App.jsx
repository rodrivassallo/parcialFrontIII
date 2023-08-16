import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showError, setShowError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1.trim().length < 3 || /^\s/.test(input1)) {
      setShowError(true);
      setShowCard(false);
    } else if (input2.length < 6) {
      setShowError(true);
      setShowCard(false);
    } else {
      setShowError(false);
      setShowCard(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input1">Input 1:</label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />

        <label htmlFor="input2">Input 2:</label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {showError && <div className="error-message">Por favor chequea que la información sea correcta.</div>}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;