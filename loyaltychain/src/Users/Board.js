import React from "react";
import '../styles/Board.css'
import Graph from "./Graph";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

function Board() {

    var data = [
        {
            Adresse: "01",
            Messages: "You have a new command from Mister Suzuki"
        },
        {
            Adresse: "02",
            Messages: "Mr. ZINSOU has already send you money"
        },
        {
            Adresse: "03",
            Messages: "You have a new client"
        }
    ]

    return (
        <div className="Board">
            <Sidebar/>
            <Searchbar/>
            <div className="PartOne">
                <div className="Graph">
                    <Graph/>
                </div>
                <div className="Message">
                    <div className="Head">
                        <h2>Messages</h2>
                        <label style={{
                            color: "blue",
                            fontWeight: "700",
                        }}>Voir plus</label>
                    </div>
                    <div className="MessageContainer">
                        {
                            data.map((value, index) => {
                                return(
                                    <div className="MessageContent" key={index}>
                                        <h3>{value.Adresse}</h3>
                                        <label>{value.Messages}</label>
                                    </div>
                                )
                            })
                        }                                                                                                
                    </div>
                </div>
            </div>
            <div className="PartTwo">
                <div className="Gains">
                    <label>Gain</label>
                </div>
                <div className="Affairs_count">
                    <label>Chiffre d'affaires</label>
                </div>
                <div className="Menu_Stats">
                    <label>Nombre de plats</label>
                </div>
            </div>
        </div>
    );
}

export default Board;