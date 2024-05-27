// src/pages/Services.js

/**
 * File name: Services.js
 * Student's Name: Nacelle Anne De Mesa
 * Student ID: 301352882
 * Date: 05/21/24
 */


import React from 'react';
import './Services.css';
import webDevImage from '../assets/world-wide-web.png';
import graphicDesign from '../assets/web-design.png';
import socialMediaManagement from '../assets/social-media-management.png';

const services = [
  { id: 1, title: 'Web Development', description: 'Crafting dynamic and user-friendly websites tailored to your needs, utilizing the latest technologies and best practices to enhance functionality, aesthetics, and overall user experience.', image: webDevImage },
  { id: 2, title: 'Graphic Design', description: 'Offering a comprehensive range of design services, including logo creation, business card design, social media graphics, marketing materials, website visuals, brand identity development, packaging design, infographics, event graphics, and custom illustrations. Our goal is to create visually appealing and cohesive designs that effectively communicate your brands message and captivate your audience.', image: graphicDesign },
  { id: 3, title: 'Social Media Management', description: 'Managing and enhancing your social media presence through strategic content creation, scheduling, engagement, and analytics to grow your audience and drive engagement.', image: socialMediaManagement },
];

const Services = () => (
  <div className="services">
    <h1>My Services</h1>
    <div className="service-list">
      {services.map(service => (
        <div key={service.id} className="service">
          <img src={service.image} alt={service.title} className="service-image" />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
