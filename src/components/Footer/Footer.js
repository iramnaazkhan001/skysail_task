import React from 'react';
import './Footer.css';
import { Facebook, Instagram } from '@mui/icons-material';
import logo from '../assets/image.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo}  width={70} style={{ borderRadius: '50px' }}alt="Logo" className="footer-logo" />
          <p>Petal And Prosper</p>
      <p>Address Lorem ipsum dolor.</p>
          <p>© Copyright Petal And Prosper</p>
        </div>
        <div className="footer-center">
          <h4>Our Services</h4>
          <ul>
            <li>Wedding Flowers</li>
            <li>Event Flowers</li>
            <li>Bespoke Flowers</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Contact</h4>
          <ul>
            <li>Wedding Enquiry Form</li>
            <li>Event Enquiry Form</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-right">
        <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="/"><Facebook /></a>
            <a href="/"><Instagram /></a>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;

