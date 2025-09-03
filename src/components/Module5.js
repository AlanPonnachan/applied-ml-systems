import React from 'react';
import { Link } from 'react-router-dom';

const Module5 = () => {
  return (
    <div>
      <h1>Module 5: The Ecosystem: Infrastructure & People</h1>
      <p>This module zooms out to look at the broader ecosystem, covering the tools (MLOps Stack), the team structures, and the human principles of Responsible AI that enable a successful ML practice.</p>
      
      <hr/>

      <img 
        src={`${process.env.PUBLIC_URL}/img/module5.svg`} 
        alt="Diagrams about the MLOps stack, team structures, and responsible AI" 
        className="topic-svg" 
      />

      <hr/>
      
      <div className="module-navigation">
        <Link to="/module4" className="nav-link">
          <span>&larr;</span> Module 4: Operations
        </Link>
        {/* Grayed out "next" button for the last module */}
        <span className="nav-link-disabled">Next Module &rarr;</span>
      </div>
    </div>
  );
};

export default Module5;