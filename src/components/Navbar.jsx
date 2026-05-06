import { useState, useEffect } from 'react';
import { List } from '@phosphor-icons/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-content">
        <a href="#" className="logo">
          <img src="/assets/images/logo.png" alt="Tesseract Logo" />
          <span className="brand-name">
            <span className="brand-main">Tesseract</span>
            <span className="brand-sub">Matrix</span>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#contact" className="btn btn-primary">Get Started</a></li>
        </ul>
        <button className="mobile-menu-btn">
          <List size={32} weight="bold" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
