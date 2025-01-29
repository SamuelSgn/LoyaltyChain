import React, { useState } from "react";
import axios from "axios";
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import  Home1  from './assets/Fwd_ pour digit food/6.png';
import Home2 from './assets/Fwd_ pour digit food/Indian1.jpg';
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router-dom";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './styles/Login.css';

export const Login = (props) => {
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    var images = [ Home1, Home2 ];

    const turn = () => {
        if (index < images.length -1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }

    const checkstring = (str) => {
        return /^[A-Za-z0-9]*$/.test(str);
    }

    const checkPassword = (password) => {
        let isValid = checkstring(password);
        if (password.length >= 8 && isValid === true) {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkPassword(password)) {
            alert('Incorrect password or email');
        }
        const info = { contact, password };
        // console.log(info.contact, info.password);
        axios.post("http://localhost:5000/login", info)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                if (response.data !== "Incorrect password" && response.data !== "Incorrect contact") {
                    localStorage.setItem("kitchen", response.data.token);
                    localStorage.getItem("kitchen");
                    navigate('/Dashboard');
                } else {
                    alert("Error");
                }
            }
        })
        .catch((error) => console.error('Login failed', error));
    }

    return (
        <div style={{
            textAlign: 'center',
            display: 'flex',
            minHeight: '100vh',
            width: '100vw',
            position: 'absolute',
            left: '0',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            // backgroundImage: `url(${images[index]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#653E32',
        }}>
            <Navbar/>
        <div className="log-form-container">
        {/* <div className="Arrays">
          <WestIcon className="arrow" onClick={turn} />
          <EastIcon className="Arrows" onClick={turn} />
        </div> */}
              <h2>CONNECTEZ-VOUS</h2>
        <form className="login-form" onSubmit={handleSubmit}>
           <label htmlFor="contacts">Contact: </label>
           <input value={contact} onChange={(e) => setContact(e.target.value)}type="tel" placeholder="+229 01 23 45 67" id="phone" name="phone" required/>
           <label htmlFor="password">Mot de passe: </label>
           <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password" required/>
           <button type="button" onClick={(e)=>{ handleSubmit(e)}}>SE CONNECTER</button>
        </form>
        </div>
              </div>
    )
}