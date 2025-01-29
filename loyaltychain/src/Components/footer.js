import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';
import {Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon/> <FacebookIcon/> <LinkedInIcon/> <TwitterIcon/> 
        </div>
        <p>&copy; 2024 loyaltychain@epitech.eu</p>
        <Link to="/Politique de confidentialité">Politique de confidentialité</Link>
    </div>
  )
}

export default Footer;
