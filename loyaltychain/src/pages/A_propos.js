import React, { useState } from "react";
import "../styles/A_propos.css";
import  Home1  from '../assets/Fwd_ pour digit food/6.png';
import Home2 from '../assets/Fwd_ pour digit food/Indian1.jpg';
import Navbar from "../Components/Navbar";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

function A_propos() {
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
        <div className="about" style={{
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
          <EastIcon className="Arrows" onClick={turn} />
        </div> */}
            <div className="aboutTop"></div>
                <div className="aboutBottom">
                    <h1>A propos de nous</h1>
                    <p>loyaltychain est un site web qui permet aux entreprises locales, aux spécialistes du e-commerce
                      d'accroitre leur clientèle à travers des bons de réduction
                    </p>
                </div>
            </div>
    );
}

export default A_propos;