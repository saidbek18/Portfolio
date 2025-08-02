// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaInfoCircle,  FaTelegramPlane } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/s1.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>

        <a href="https://t.me/zxsaikomusic" target="_blank" rel="noreferrer">
          Chanel <FaInfoCircle style={{ marginLeft: '6px' }} />
        </a>
        <a href="https://t.me/Towards_the_void" target="_blank" rel="noreferrer">
          Contact <FaTelegramPlane style={{ marginLeft: '6px' }} /> 
        </a>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
