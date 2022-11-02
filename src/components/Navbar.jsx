import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="title">Math Magicians</h1>
    <ul className="links">
      <li className="linkItem">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="divider" />
      <li className="linkItem">
        <NavLink
          to="calculator"
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Calculator
        </NavLink>
      </li>
      <li className="divider" />
      <li className="linkItem">
        <NavLink
          to="quote"
          className={({ isActive }) => (isActive ? 'activelink' : undefined)}
        >
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
