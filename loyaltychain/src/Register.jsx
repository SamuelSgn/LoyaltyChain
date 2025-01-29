import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//import VisibilityIcon from '@mui/icons-material/Visibility';
import  Home1  from './assets/Fwd_ pour digit food/6.png';
import Home2 from './assets/Fwd_ pour digit food/Indian1.jpg';
import Navbar from "./Components/Navbar";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './App.css';

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name_of_the_restaurant, setName_of_the_restaurant] = useState('');
    const [localisation, setLocalisation] = useState('');
    const [contacts, setContacts] = useState('');
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
    
    const checkEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  };

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
    if (!checkEmail(email) || !checkPassword(password)) {
      alert('Incorrect password or email');
    }
    const info = { name_of_the_restaurant, email, localisation, contacts, password };
    console.log(info.name, info.email, info.Localisation, info.contacts, info.password);
    axios.post("http://localhost:5000/register", info)
      .then((response) => {
        console.log(response.data);
        navigate('/Dashboard');
      })
      .catch((error) => console.log(error));
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
        <div className="auth-form-container">
        {/* <div className="Food">
          <WestIcon className="leftarrow" onClick={turn} />
          <EastIcon className="rightArrows" onClick={turn}/>
        </div> */}
            <h2>INSCRIVEZ-VOUS</h2>
            <form className="register-form">
                <label htmlFor="Restaurant Name">Nom de l'entreprise: </label>
                <input value={name_of_the_restaurant} onChange={(e) => setName_of_the_restaurant(e.target.value)} type="text" name="Restaurant Name" id="Restaurant Name" placeholder="Nom du restaurant" required/>
                <label htmlFor="email">Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                <label htmlFor="localisation">Localisation: </label>
                <input value={localisation} onChange={(e) => setLocalisation(e.target.value)} type="text" placeholder="Localisation" id="localisation" name="localisation" required/>
                <label htmlFor="contacts">Contact: </label>
                <input value={contacts} onChange={(e) => setContacts(e.target.value)} type="tel" placeholder="contacts" id="contacts" name="contacts" required/>
                <label htmlFor="password">Mot de passe: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" required/>
                <button type="button" onClick={(e)=>{ handleSubmit(e)}} >S'INSCRIRE</button>
            </form>
        </div>
              </div>
    )
}