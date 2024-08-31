import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        {['home', 'about', 'education', 'work-experience', 'organization-experience', 'projects', 'certifications', 'contact'].map((section) => (
          <li key={section}>
            <span onClick={() => scrollToSection(section)}>{section.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
