import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
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
