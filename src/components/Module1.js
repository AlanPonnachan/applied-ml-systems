import React from 'react';
import { Link } from 'react-router-dom';

const Module1 = () => {
  return (
    <div>
      <h1>Module 1: The Production Mindset</h1>
      <p>This module establishes why production ML is a different discipline from theoretical ML, covering its fundamental nature, the components of a full system, its iterative lifecycle, and common reasons for project failure.</p>
      
      <hr/>

      <img 
        src={`${process.env.PUBLIC_URL}/img/module1.svg`} 
        alt="A diagram covering the fundamentals of the production ML mindset" 
        className="topic-svg" 
      />

      <hr/>
      
      <div className="module-navigation">
        {/* Grayed out "previous" button for the first module */}
        <span className="nav-link-disabled">&larr; Previous Module</span>
        <Link to="/module2" className="nav-link">
          Module 2: Development <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Module1;

