import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Plateforme LoyaltyChain</h1>
        <nav className="nav-bar">
          <a href="#" className="nav-link">Accueil</a>
          <a href="#" className="nav-link">Inscription</a>
          <a href="#" className="nav-link">Connexion</a>
          <a href="#" className="nav-link">Profil</a>
          <a href="#" className="nav-link">Récompenses</a>
        </nav>
      </header>
      <main className="main-content">
        <section className="login-form">
          <h2 className="section-title">Connexion</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" className="input-field" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe :</label>
              <input type="password" id="password" className="input-field" />
            </div>
            <button type="submit" className="submit-button">Se connecter</button>
          </form>
        </section>
        <section className="info-section">
          <h2 className="section-subtitle">La Blockchain au Service des Entreprises Locales</h2>
          <p className="info-text">
            Découvrez comment LoyaltyChain utilise la technologie blockchain pour offrir transparence,
            sécurité et efficacité aux entreprises locales et leurs clients.
          </p>
          <img
            src="/Blockchain.png"
            alt="Blockchain et entreprises locales"
            className="info-image"
          />
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 LoyaltyChain. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;
