import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Applied ML Systems</h1>
        <p className="intro">
          An illustrated guide to the principles of building, deploying, and maintaining
          machine learning systems in production.
        </p>
      </header>

      <section className="home-section">
     
      </section>

      <section className="home-section">
        <h2>Get Started</h2>
        <p>
          Use the sidebar to explore the five core modules of the ML system lifecycle.
        </p>
      </section>

      <section className="home-section">
      <h2>About the Project</h2>
      <div className="card-grid">
        <a
          href="https://github.com/AlanPonnachan/applied-ml-systems"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>Project Repository ↗</h3>
          <p>
            View the source code, contribute, or report issues on GitHub.  
            If you find this project useful, ⭐ please star the repository!
          </p>
        </a>
      </div>
    </section>
    

      <section className="home-section">
        <h2>About the Author</h2>
        <div className="card-grid">
          <a
            href="https://github.com/AlanPonnachan/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>GitHub Profile ↗</h3>
            <p>See my other projects and contributions.</p>
          </a>
          <a
            href="https://x.com/alan_ponnachan"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>Twitter Profile ↗</h3>
            <p>Follow me for updates and discussions on tech and ML.</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
