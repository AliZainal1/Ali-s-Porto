// HomePage.js
import React from 'react';
import './HomePage.css';


const HomePage = () => {
  return (
    <div id="home" className="home-page"> {/* Tambahkan id="home" */}
      <div className="hero-container">
        
        {/* Bagian baru untuk nama dan deskripsi di kiri atas */}
        <div className="hero-text-top">
          <h1>Ali Zainal Abidin</h1>
          <p>I am an enthusiast in Product and Project Management.</p>
        </div>

        {/* Bagian untuk button dan LinkedIn di tengah bawah */}
        <div className="hero-buttons">
          <a href="https://www.linkedin.com/in/zainalshahab" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-logo.png" alt="LinkedIn" className="linkedin-icon" />
          </a>
          <button onClick={() => window.location.href = '#contact'}>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
