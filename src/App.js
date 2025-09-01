import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Module4 from './components/Module4';
import Module5 from './components/Module5';
import References from './components/References';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module1" element={<Module1 />} />
            <Route path="/module2" element={<Module2 />} />
            <Route path="/module3" element={<Module3 />} />
            <Route path="/module4" element={<Module4 />} />
            <Route path="/module5" element={<Module5 />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;