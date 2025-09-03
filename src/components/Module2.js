import React from 'react';
import { Link } from 'react-router-dom';

const Module2 = () => {
  return (
    <div>
      <h1>Module 2: Development: From Data to Model</h1>
      <p>This module covers the core 'offline' part of the machine learning lifecycle: taking raw data and turning it into a validated, high-quality model ready for deployment.</p>
      
      <hr/>

      {/* This will display your combined SVG for the entire module */}
      <img 
        src={`${process.env.PUBLIC_URL}/img/module2.svg`} 
        alt="Diagrams explaining the data, feature engineering, and model training process" 
        className="topic-svg" 
      />

      <hr/>
      
      {/* NEW & IMPROVED NAVIGATION */}
      <div className="module-navigation">
        <Link to="/module1" className="nav-link">
          <span>&larr;</span> Module 1: The Mindset
        </Link>
        <Link to="/module3" className="nav-link">
          Module 3: Deployment <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Module2;