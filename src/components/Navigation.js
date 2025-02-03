// src/components/Navigation.js

/**
 * File name: Navigation.js
 * Student's Name: Nacelle Anne De Mesa
 * Student ID: 301352882
 * Date: 05/21/24
 */

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/Nacelle_logo2.png'; 
// import './Navigation.css'; 

// const Navigation = () => (
//   <nav className="navigation">
//     <div className="logo-container">
//       <img src={logo} alt="Logo" className="logo" />
//     </div>
//     <ul className="nav-links">
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About Me</Link></li>
//       <li><Link to="/projects">Projects</Link></li>
//       <li><Link to="/services">Services</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//   </nav>
// );

// export default Navigation; 

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/Nacelle_logo2.png'; 
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
     <img src={logo} alt="Logo" className="logo" /></div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
