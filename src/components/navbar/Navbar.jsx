import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import bloodBridgeLogo from '../../assets/public/BloodBridgeLogo.png';
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={bloodBridgeLogo} alt="Blood Bridge Logo" />
        <span className="title">Blood Bridge</span>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      <div className="action-btn">
        <button className="cta-btn">
          <FaHeart /> Become A Hero
        </button>
      </div>
    </nav>
  );
};

export default Navbar;