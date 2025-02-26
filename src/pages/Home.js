// // src/pages/Home.js

// /**
//  * File name: Homepage.js
//  * Student's Name: Nacelle Anne De Mesa
//  * Student ID: 301352882
//  * Date: 05/21/24
//  */

// import React from 'react';
// import './Home.css';
// import profilePic from '../assets/Nacelle_logo1.png';

// const Home = () => (
//   <div className="home">
//     <div className="home-content">
//       <div className="home-image">
//         <img src={profilePic} alt="Profile" />
//       </div>
//       <div className="home-text">
//         <h1>Welcome to My Portfolio</h1>
//         <p>My mission as a graphic designer and web developer who aims to create immersive digital experiences, elevate brands, and foster meaningful connections between businesses and their audiences. I am committed to creativity, functionality, and user-centric design principles.</p>
//         <a href="/about" className="btn">Learn More About Me</a>
//       </div>
//     </div>
//   </div>
// );

// export default Home;


import React from 'react';
import './Home.css';
import profilePic from '../assets/Nacelle_logo3.png';

const Home = () => (
  <div className="home">
    <div className="home-content">
    <div className="home-image">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="home-text">
        <p className="intro-text">Hi, Im NACELLE ANNE</p>
        <h1>I Am A Web Developer & Graphic Designer</h1>
        <p className="description">
        I blend creativity and technology to design and develop visually compelling, user-friendly websites that elevate brands and engage audiences.
        </p>
        <a href="/contact" className="btn">Contact Me</a>
      </div>
      
    </div>
  </div>
);

export default Home;
