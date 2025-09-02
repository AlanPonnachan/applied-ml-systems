import React from 'react';
import { Link } from 'react-router-dom';

const Module2 = () => {
  return (
    <div>
      <h1>Module 2: Development: From Data to Model</h1>
      <p>This module covers the core 'offline' part of the machine learning lifecycle: taking raw data and turning it into a validated, high-quality model ready for deployment.</p>
      
      <hr/>

      {/* You just change the filename here */}
      <img 
        src="/img/module2.svg" 
        alt="Diagrams explaining the data, feature engineering, and model training process" 
        className="topic-svg" 
      />

      <hr/>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/module1">&lt;&lt; Previous Module</Link>
        <Link to="/module3">Next Module &gt;&gt;</Link>
      </div>
    </div>
  );
};

export default Module2;