import React from 'react';
import I4GLogo from '../assets/I4G_logo.png';
import ZuriLogo from '../assets/zuri_logo.png';
import '../styles/Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <img className="zuri-logo" src={ZuriLogo} alt="Zuri Logo" />
      <span className="hng-9">HNG Internship 9 Frontend Task</span>
      <img className="i4g-logo" src={I4GLogo} alt="I4G Logo" />
    </div>
  </footer>
);

export default Footer;
