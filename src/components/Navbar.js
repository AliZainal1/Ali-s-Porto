import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the navbar visibility

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the navbar after clicking a link
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the navbar state
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleNavbar}>
        &#9776; {/* Hamburger menu icon */}
      </div>
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li>
          <span onClick={() => scrollToSection('home')}>Home</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('about')}>About</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('education')}>Education</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('work-experience')}>Work Experience</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('organization-experience')}>Organization Experience</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('projects')}>Projects</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('certifications')}>Certifications</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('contact')}>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
