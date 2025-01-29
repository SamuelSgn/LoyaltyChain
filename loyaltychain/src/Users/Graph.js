import React from "react";
import {CategoryScale} from "chart.js";
import { Line } from "react-chartjs-2";
import Chart  from "chart.js/auto";

function Graph() {

    var data = {
        labels: ["janvier", "février", "mars", "avril", "mai", "juin" ],
        datasets: [
            {
                label: "Gain mensuel en francs CFA",
                data: [0, 25000, 75000, 150000, 580000, 675000 ],
                backgroundColor: "green", borderColor: "maroon",
                pointRadius: 0, borderWidth: 1
            },
            {
                label: "Gains mensuel en euros",
                data: [45000, 125000, 190000, 280000, 395000, 900000 ],
                backgroundColor: "yellow", borderColor: "red",
                pointRadius: 0, borderWidth: 1
            }
        ]
    };

    Chart.register(CategoryScale);
    
    return (
        <div>
            <Line data={data}/>
        </div>
    );
}

export default Graph;