import React, { useState } from 'react';
import './AboutMe.css';
import Foto1 from './Foto1.jpg';
import Foto2 from './Foto2.jpg';
import Foto3 from './Foto3.jpg';
import Foto4 from './Foto4.jpg';
import Foto5 from './Foto5.jpg';
import Foto6 from './Foto6.jpg';
import IkonKanan from './Ikon kanan.svg';
import IkonKiri from './Ikon kiri.svg';

const AboutMe = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];

  const nextImageSet = () => {
    setFade(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 500);
  };

  const prevImageSet = () => {
    setFade(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(false);
    }, 500);
  };

  const getVisibleImages = () => {
    if (window.innerWidth <= 480) { // Show only one image on mobile
      return [images[startIndex]];
    } else {
      return [
        images[startIndex],
        images[(startIndex + 1) % images.length],
        images[(startIndex + 2) % images.length],
      ];
    }
  };

  return (
    <div id="about" className="about-me" style={{ backgroundImage: `url(${Foto7})` }}>
      <div className="glassmorphism-container">
        <h2 className="about-me-title">About Me</h2>
        <p className="about-me-description">
          Final-year Information Systems student at Universitas Negeri Surabaya with a focus on Product Management, Project Management, and Systems Analysis. 
          Experienced in managing projects during internships at PT XL Axiata Tbk and Rakamin Academy, with skills in backlog management, sprint handling, and 
          product analysis. Strong communicator and collaborative team player, adept at using Agile methodologies and data-driven insights to drive successful 
          product development.
        </p>

        {/* Slider Foto */}
        <div className="photo-slider-container">
          <img src={IkonKiri} alt="Previous" onClick={prevImageSet} className="slider-icon" />
          
          <div className={`photo-slider ${fade ? 'fade-out' : 'fade-in'}`}>
            {getVisibleImages().map((image, index) => (
              <div className="image-container" key={index}>
                <img src={image} alt={`Foto ${startIndex + index + 1}`} className="slider-image" />
              </div>
            ))}
          </div>

          <img src={IkonKanan} alt="Next" onClick={nextImageSet} className="slider-icon" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
