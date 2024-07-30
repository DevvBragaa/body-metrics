// Toolbar.js
import React from 'react';
import './toolbar.css'; // Importando o CSS para a toolbar

const Toolbar = ({ onActionClick }) => {
  return (
    <div className="toolbar">
      <h1 className="toolbar-title">Body Metrics</h1>
      <button className="toolbar-button" onClick={() => onActionClick('action1')}>Login</button>
      <button className="toolbar-button" onClick={() => onActionClick('action2')}>Cadastre-se</button>
      </div>
  );
};

export default Toolbar;
