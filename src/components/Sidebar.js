import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
  const handleLinkClick = () => {
    if (isOpen) toggle();
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header">
        {isOpen && <h2 className="sidebar-title">Applied ML Systems</h2>}
        <button onClick={toggle} className="toggle-btn">
          {isOpen ? '‹' : '›'}
        </button>
      </div>

      {isOpen && (
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => isActive ? 'active' : ''} 
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
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
