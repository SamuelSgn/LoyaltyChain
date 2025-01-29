import React from "react";
import { Login } from "./Login";
import  Register  from "./Register";
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import A_propos from "./pages/A_propos";
import Contact from "./pages/Contact";
// import Dashboard from "./Users/Dashboard";
import Menu from "./Components/Menu";
import Board from "./Users/Board";
import Sales from "./Users/Sales";
import Report from "./Users/Rapport";
import MenuItem from "./Components/MenuItem";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/Login" exact Component={Login}/>
          <Route path="/Register" exact Component={Register}/>
          <Route path="/A propos" exact Component={A_propos}/>
          <Route path="/Contact" exact Component={Contact}/>
          <Route path="/Dashboard" exact Component={Board}/>
          <Route path="/Ventes" exact Component={Sales}/>
          <Route path="/Rapport" exact Component={Report}/>
          <Route path="/Menu" exact Component={Menu}/>
          <Route path="/Menu" exact Component={MenuItem}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
