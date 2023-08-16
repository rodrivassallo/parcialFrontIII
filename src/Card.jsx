import React from 'react';
import './Card.css';

function Card({ input1, input2 }) {
  return (
    <div className="card">
      <h2>Datos ingresados:</h2>
      <p>Input 1: {input1}</p>
      <p>Input 2: {input2}</p>
    </div>
  );
}

export default Card;