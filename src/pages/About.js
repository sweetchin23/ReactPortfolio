// // src/pages/About.js

// /**
//  * File name: About.js
//  * Student's Name: Nacelle Anne De Mesa
//  * Student ID: 301352882
//  * Date: 05/21/24
//  */

// import React from 'react';
// import './About.css';
// import profilePic from '../assets/me.png'; 
// import resumePDF from '../assets/myresume.pdf'; 

// const About = () => (
//   <div className="about">
//     <div className="about-content">
//       <div className="about-image">
//         <img src={profilePic} alt="Profile" />
//       </div>
//       <div className="about-text">
//         <h1>About Me</h1>
//         <p>Hello, my name is Nacelle Anne De Mesa. I am a Creative Front-End Developer with a background in graphic design and web development.</p><p> With expertise in HTML5, CSS3, JavaScript, and React.js, I specialize in creating visually appealing, user-friendly, and high-performing digital experiences.</p>
// <p>My experience extends to API integration, Agile development, and UI/UX principles, ensuring that every project is not only functional but also engaging.</p><p>With a strong passion for innovation and continuous learning, I am committed to delivering high-quality solutions that enhance user experiences and drive results.</p>
// <p>I am eager to contribute my skills to a dynamic team and create impactful digital solutions.</p>
//         <a href={resumePDF} className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
//       </div>
//     </div>
//   </div>
// );

// export default About;


import React from 'react';
import './About.css';
import profilePic from '../assets/me.png'; 
import resumePDF from '../assets/myresume.pdf'; 
import { FaBehance, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => (
  <div className="about">
    <div className="about-container">
      <div className="about-image">
        <img src={profilePic} alt="Nacelle Anne De Mesa" />
      </div>
      <div className="about-text">
        <h1>ABOUT ME</h1>
        <h2><span>NACELLE ANNE DE MESA</span> - CREATIVE FRONT-END DEVELOPER</h2>
        <p>
          Hello! I am a passionate front-end developer with a background in graphic design and web development.
          With expertise in HTML5, CSS3, JavaScript, and React.js, I specialize in creating visually appealing, 
          user-friendly, and high-performing digital experiences.
        </p>
        <p>
          My experience includes API integration, Agile development, and UI/UX principles, ensuring that every 
          project is both functional and engaging. I am committed to delivering high-quality solutions that enhance 
          user experiences and drive results.
        </p>
        <a href={resumePDF} className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
        <div className="social-icons">
          <a href="https://www.behance.net/nacelledemesa1" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
          <a href="https://github.com/sweetchin23" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nacelleannedemesa/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
