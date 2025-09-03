import React from 'react';
import { Link } from 'react-router-dom';

const References = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>References & Acknowledgements</h1>
        <p className="page-intro">
          This entire project is a visual synthesis and interpretation of the incredible work from the following authors. I highly recommend reading their original books for a complete and nuanced understanding.
        </p>
      </div>

      <h2>Primary Sources</h2>
      <div className="card-container">
        <a href="https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" target="_blank" rel="noopener noreferrer" className="card">
          <h3>Designing Machine Learning Systems</h3>
          <p>by Chip Huyen (O'Reilly, 2022)</p>
        </a>
        <a href="http://www.mlebook.com/" target="_blank" rel="noopener noreferrer" className="card">
          <h3>Machine Learning Engineering</h3>
          <p>by Andriy Burkov (True Positive Inc., 2020)</p>
        </a>
      </div>
      
      <hr/>

      <div className="module-navigation">
        <Link to="/module5" className="nav-link">
          <span>&larr;</span> Module 5: The Ecosystem
        </Link>
        <span className="nav-link-disabled">End of Guide</span>
      </div>
    </div>
  );
};

export default References;