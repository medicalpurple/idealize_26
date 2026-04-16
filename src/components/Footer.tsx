import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>IDEALIZE 2025</h3>
            <p>A national mobile app and web development competition organized by AIESEC in University of Moratuwa.</p>
            <div className="social-links">
              <a href="#">FB</a>
              <a href="#">TW</a>
              <a href="#">IG</a>
              <a href="#">LI</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Idealize</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>University of Moratuwa, Katubedda, Moratuwa, Sri Lanka</p>
            <p>idealize@aiesec.lk</p>
            <p>+94 71 234 5678</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 AIESEC in University of Moratuwa. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
