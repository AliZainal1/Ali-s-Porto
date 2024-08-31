import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div id="home" className="home-page">
      <div className="hero-container">
        
        <div className="hero-text-top">
          <h1>Ali Zainal Abidin</h1>
          <p>I am an enthusiast in Product and Project Management.</p>
        </div>

        <div className="hero-buttons">
          <a href="https://www.linkedin.com/in/zainalshahab" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-logo.png" alt="LinkedIn" className="linkedin-icon" />
          </a>
          <button onClick={() => window.location.href = '#contact'}>Contact Me</button>
        </div>

        {/* Updated Button text for Curriculum Vitae */}
        <div className="cv-button-container">
          <button className="cv-button" onClick={() => window.open('https://drive.google.com/drive/folders/1qIibZL-G0IH0sNOrEm4bwPG_UVj2G-sX?usp=sharing', '_blank')}>
            My CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
