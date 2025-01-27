import React, { useState } from "react";
import "../styles/Contact.css";
import  Home1  from '../assets/Fwd_ pour digit food/6.png';
import Home2 from "../assets/Fwd_ pour digit food/Indian1.jpg";
import Navbar from "../Components/Navbar";
// import WestIcon from '@mui/icons-material/West';
// import EastIcon from '@mui/icons-material/East';

function Contact() {
  const [index, setIndex] = useState(0);
    var images = [ Home1, Home2 ];

    const turn = () => {
      if (index < images.length -1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
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
     {/* <div className="Arrays">
          <WestIcon className="arrow" onClick={turn} />
          <EastIcon className="Arrows" onClick={turn}/>
        </div>  */}
    <div className="contact">                                                                                                                                                                                       
                                                                                                                                                                                                      
      <div className="right">                                                                                                                                                                                   
        <h1> Contactez-nous</h1>                                                                                                                                                                                        
                                                                                                                                                                                                                    
        <form className="contact-form">                                                                                                                                                                      
          <label htmlFor="name">Nom complet</label>                                                                                                                                                                   
          <input name="name" placeholder="Enter full name..." type="text" />                                                                                                                                        
          <label htmlFor="email">Email</label>                                                                                                                                                                      
          <input name="email" placeholder="Enter email..." type="email" />                                                                                                                                          
          <label htmlFor="message">Message</label>                                                                                                                                                                  
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            ></textarea>                                                                                                                                                                                              
          <button type="submit">Envoyez</button>                                                                                                                                                              
        </form>                                                                                                                                                                                                     
      </div>                                                                                                                                                                                                        
    </div>
            </div>
  );
}

export default Contact;
