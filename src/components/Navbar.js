// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <Link to='/' className="logo">Brisphere</Link>
    <ul>
      <li>Discover</li>
      <li>Services</li>
      <li>About Us</li>
    </ul>
  </nav>
);

export default Navbar;