import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import '../styles/Sales.css';
import Sidebar from "./Sidebar.js";
import Searchbar from "./Searchbar.jsx";

const Sales = () => {
  const [activeTab, setActiveTab] = useState("clients");

  // Données de test pour les graphiques
  const data = {
    clients: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [
        {
          label: "Nombre de clients par jour",
          data: [0, 25, 50, 75, 100, 150, 200],
        },
      ],
    },
    orders: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [
        {
          label: 'Nombre de commandes par jour',
          data: [250, 50, 75, 100, 150, 200, 500],
        },
      ],
    },
  };

  return (
    <div className="Sales">
        <Sidebar/>
        <Searchbar/>
      {/* Onglets pour basculer entre les graphiques */}
      <div className="Tabs">
        <button onClick={() => setActiveTab("clients")}>Clients</button>
        <button onClick={() => setActiveTab("orders")}>Commandes</button>
        <button onClick={() => setActiveTab("food")}>Fréquence des commandes</button>
      </div>
      {/* Affichage du graphique en fonction de l'onglet actif */}
      <div className="Chart">
        {activeTab === "clients" && <Line data={data.clients} />}
        {activeTab === "orders" && <Line data={data.orders} />}
      </div>
    </div>
  );
};

export default Sales;
