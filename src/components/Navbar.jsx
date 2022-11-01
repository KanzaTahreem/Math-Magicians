import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="title">Math Magicians</h1>
    <ul className="links">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
