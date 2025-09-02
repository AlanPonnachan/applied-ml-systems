import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
  
  // This function will be called on every link click
  const handleLinkClick = () => {
    // If the sidebar is open, close it.
    if (isOpen) {
      toggle();
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        {isOpen && <h2>Architecting Intelligence</h2>}
        <button onClick={toggle} className="toggle-btn">
          {isOpen ? '‹' : '›'}
        </button>
      </div>
      
      {isOpen && (
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick} end>Home</NavLink></li>
            <li><NavLink to="/module1" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Module 1: The Mindset</NavLink></li>
            <li><NavLink to="/module2" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Module 2: Development</NavLink></li>
            <li><NavLink to="/module3" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Module 3: Deployment</NavLink></li>
            <li><NavLink to="/module4" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Module 4: Operations</NavLink></li>
            <li><NavLink to="/module5" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Module 5: The Ecosystem</NavLink></li>
            <li><NavLink to="/references" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>References</NavLink></li>
          </ul>
        </nav>
      )}
    </aside>
  );
};

export default Sidebar;