import { useState } from 'react';

export default function Credits({ onBack }) {
  return (
    <div className="credits">
      <h1>Créditos</h1>
      <p className="credits-authors">Autores:</p>
      <p>Cristienny Correia</p>
      <p>Igor Dias de Oliveira</p>
      <p>Guilherme Luiz</p>
      <img className="credits-image" src="/creditos.jpeg" alt="Créditos" />
      <button type="button" className="credits-back" onClick={onBack}>
        Voltar
      </button>
    </div>
  );
}
