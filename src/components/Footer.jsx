import React from 'react';
import { LinkedinLogo, TwitterLogo, GithubLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/assets/images/logo.png" alt="Tesseract Logo" />
              <span className="brand-name">
                <span className="brand-main">Tesseract</span>
                <span className="brand-sub">Matrix</span>
              </span>
            </a>
            <p>Engineering the future with IoT, Embedded Systems, and AI.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><LinkedinLogo size={24} /></a>
              <a href="#"><TwitterLogo size={24} /></a>
              <a href="#"><GithubLogo size={24} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Tesseract Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
