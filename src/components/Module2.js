import React from 'react';
import { Link } from 'react-router-dom';

const Module1 = () => {
  return (
    <div>
      <h1>Module 1: The Production Mindset</h1>
      <p>This module establishes why production ML is a different discipline from theoretical ML, covering its fundamental nature, the components of a full system, its iterative lifecycle, and common reasons for project failure.</p>
      
      <hr/>

      {/* The single, combined SVG for the entire module */}
      <img 
        src="./public/img/module1.svg" 
        alt="A diagram covering the fundamentals of the production ML mindset" 
        className="topic-svg" 
      />

      <hr/>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: '#ccc' }}>&lt;&lt; Previous Module</span>
        <Link to="/module2">Next Module &gt;&gt;</Link>
      </div>
    </div>
  );
};

export default Module1;