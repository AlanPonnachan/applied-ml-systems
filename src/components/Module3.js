import React from 'react';
import { Link } from 'react-router-dom';

const Module3 = () => {
  return (
    <div>
      <h1>Module 3: Deployment: From Model to Product</h1>
      <p>This module demystifies the process of making a model accessible to users, covering the trade-offs between deploying on-device vs. on-server and serving predictions in batch vs. online.</p>
      
      <hr/>

      <img 
        src={`${process.env.PUBLIC_URL}/img/module3.svg`} 
        alt="Diagrams explaining model deployment and serving patterns" 
        className="topic-svg" 
      />

      <hr/>
      
      <div className="module-navigation">
        <Link to="/module2" className="nav-link">
          <span>&larr;</span> Module 2: Development
        </Link>
        <Link to="/module4" className="nav-link">
          Module 4: Operations <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Module3;