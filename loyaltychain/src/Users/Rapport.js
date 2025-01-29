import React from "react";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import '../styles/Rapport.css';

function Report() {

    return (
        <div className="Report">
            <Sidebar/>
            <Searchbar/>
            <div className="Command">
                <label>Statut des commandes</label>
                <div className="Actual">En cours de traitement</div>
                <div className="Delivery">Livré</div>
                <div className="Validate">Validé</div>
            </div>
        </div>
    );
}

export default Report;