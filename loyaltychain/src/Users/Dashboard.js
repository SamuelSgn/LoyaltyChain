import React from "react";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Board from "./Board";
// import UserConnect from "./User";

function Dashboard() {
    return (
    <div className="Dashboard">
        <Sidebar/>
        <Searchbar/>
        <Board/>
        {/* <UserConnect/> */}
    </div>
    );
}

export default Dashboard;
