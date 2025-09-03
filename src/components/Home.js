import React from 'react';

const Home = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Welcome to Applied ML Systems</h1>
        <p className="page-intro">
          An illustrated guide to the principles of building, deploying, and maintaining machine learning systems in production.
        </p>
      </div>

      <p>
        This project is a visual synthesis of two foundational books in the field of ML Engineering. It aims to provide concise, high-impact notes on the entire MLOps lifecycle, from initial project scoping to long-term maintenance.
      </p>
      
      <h2>Get Started</h2>
      <p>
        Please use the sidebar to navigate through the five core modules of the ML system lifecycle.
      </p>

      <hr/>

      <h2>About the Project</h2>
      <div className="card-links">
        <a href="https://github.com/YOUR_USERNAME/applied-ml-systems" target="_blank" rel="noopener noreferrer" className="card">
          <h3>Project Repository ↗</h3>
          <p>View the source code, contribute, or report issues on GitHub.</p>
        </a>
      </div>

      <h2>About the Author</h2>
      <div className="social-links">
        <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="card">
          <h3>GitHub Profile ↗</h3>
          <p>See my other projects and contributions.</p>
        </a>
        <a href="https://twitter.com/YOUR_TWITTER_HANDLE" target="_blank" rel="noopener noreferrer" className="card">
          <h3>Twitter Profile ↗</h3>
          <p>Follow me for updates and discussions on tech and ML.</p>
        </a>
      </div>
    </div>
  );
};

export default Home;