import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          <img src="https://idealize.aiesec.lk/logo/AIESEC.png" alt="Idealize 2025 Logo" />
        </a>
        <div className="navbar-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#categories">Categories</a>
          <a href="#awards">Awards</a>
          <a href="#timeline">Timeline</a>
          <a href="#partners">Partners</a>
          <a href="#faq">FAQ</a>
          <button className="btn-primary">Register Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
