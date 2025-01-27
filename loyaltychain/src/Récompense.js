import React from "react";
import "./Recompense.css";

const RecompensesPage = () => {
  return (
    <div className="recompenses-container">
      <header className="recompenses-header">
        <h1>Récompenses</h1>
      </header>
      <div className="recompenses-content">
        <div className="recompense-item">
          <h2>Récompense 1</h2>
          <p>Description de la récompense 1</p>
        </div>
        <div className="recompense-item">
          <h2>Récompense 2</h2>
          <p>Description de la récompense 2</p>
        </div>
        <div className="recompense-item">
          <h2>Récompense 3</h2>
          <p>Description de la récompense 3</p>
        </div>
        {/* Ajoute d'autres récompenses ici si nécessaire */}
      </div>
    </div>
  );
};

export default RecompensesPage;
