import React from 'react';
import { Link } from 'react-router-dom';

const Module4 = () => {
  return (
    <div>
      <h1>Module 4: Operations: Life in Production</h1>
      <p>This module covers the "day two" problems of keeping an ML system alive and effective, focusing on monitoring, handling data drift, continual learning, and safe production testing.</p>
      
      <hr/>

      <img 
        src={`${process.env.PUBLIC_URL}/img/module4.svg`} 
        alt="Diagrams covering ML operations like monitoring and continual learning" 
        className="topic-svg" 
      />

      <hr/>
      
      <div className="module-navigation">
        <Link to="/module3" className="nav-link">
          <span>&larr;</span> Module 3: Deployment
        </Link>
        <Link to="/module5" className="nav-link">
          Module 5: The Ecosystem <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Module4;