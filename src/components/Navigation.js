// src/components/Navigation.js

/**
 * File name: Navigation.js
 * Student's Name: Nacelle Anne De Mesa
 * Student ID: 301352882
 * Date: 05/21/24
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Nacelle_logo2.png'; 
import './Navigation.css'; 

const Navigation = () => (
  <nav className="navigation">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navigation; 
