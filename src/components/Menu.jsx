import { useState } from 'react';

export default function Menu({ onStart, onShowCredits }) {
  return (
    <div className="menu">
      <img className="menu-title" src="/title-potencia.png" alt="Título" />
      <div className="menu-buttons">
        <button type="button" className="menu-btn start" onClick={onStart}>
          Iniciar
        </button>
        <button type="button" className="menu-btn credits" onClick={onShowCredits}>
          Créditos
        </button>
      </div>
    </div>
  );
}
