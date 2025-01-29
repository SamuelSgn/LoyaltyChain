import React, { useState } from 'react';
import Logo from '../assets/Fwd_ le logo transparent/blockchain.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import { Login } from '../Login';
import Register from '../Register';
import A_propos from '../pages/A_propos';
import Contact from '../pages/Contact';

function Navbar() {

    const [showForm, setShowForm] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const toggleNavbar = () => {
        setShowForm(!showForm);
    };

    const toggleConnectNavbar = () => {
        setLoggedIn(!loggedIn);
    };

    const toggleAbout = () => {
        setShowAbout(!showAbout);
    };

    const toggleContact = () => {
        setShowContact(!showContact);
    };

    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} alt="Logo"/>
                <div className="hiddenlinks">
                <Link to="/Register" onClick={toggleNavbar}>S'INSCRIRE</Link>
                <Link to="/Login" onClick={toggleConnectNavbar}>SE CONNECTER</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">ACCUEIL</Link>
                <Link to="/A propos" onClick={toggleAbout}>A PROPOS</Link>
                <a href="/Contact" onClick={toggleContact}>CONTACT</a>
            </div>
            {showForm ? Register : setShowForm}
            {loggedIn ? Login : setLoggedIn}
            {showAbout ? A_propos : setShowAbout}
            {showContact ? Contact: setShowContact}
        </div>
    )
}

export default Navbar;