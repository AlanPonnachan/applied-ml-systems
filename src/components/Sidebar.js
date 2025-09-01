import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Architecting Intelligence</h2>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/module1" className={({ isActive }) => isActive ? 'active' : ''}>Module 1: The Mindset</NavLink></li>
          <li><NavLink to="/module2" className={({ isActive }) => isActive ? 'active' : ''}>Module 2: Development</NavLink></li>
          <li><NavLink to="/module3" className={({ isActive }) => isActive ? 'active' : ''}>Module 3: Deployment</NavLink></li>
          <li><NavLink to="/module4" className={({ isActive }) => isActive ? 'active' : ''}>Module 4: Operations</NavLink></li>
          <li><NavLink to="/module5" className={({ isActive }) => isActive ? 'active' : ''}>Module 5: The Ecosystem</NavLink></li>
          <li><NavLink to="/references" className={({ isActive }) => isActive ? 'active' : ''}>References</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;