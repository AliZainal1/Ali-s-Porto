import React, { useState } from 'react';
import './Education.css';
import Foto7 from './Foto7.jpg';
import Foto11 from './Foto11.jpg';
import Foto12 from './Foto12.jpg';
import Foto13 from './Foto13.jpg';
import Foto14 from './Foto14.jpg';
import IkonKanan from './Ikon kanan2.svg';
import IkonKiri from './Ikon kiri2.svg';
import LogoUnesa from './Logo unesa.JPG';

const Education = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const photos = [Foto11, Foto12, Foto13, Foto14];

  const nextPhoto = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      setFade(false);
    }, 300);
  };

  const prevPhoto = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
      setFade(false);
    }, 300);
  };

  return (
    <div 
      id="education" 
      className="education-section" 
      style={{ 
        backgroundImage: `url(${Foto7})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <div className="education-header">
        <h2 className="education-title">Education</h2>
        <img src={LogoUnesa} alt="Logo Unesa" className="education-logo" />
      </div>

      <div className="education-info">
        <h3 className="education-university">State University of Surabaya</h3>
        <p className="education-degree"><em>Information System</em></p>
        <p className="education-gpa">GPA: <em>3.87 / 4.00</em></p>
      </div>

      <div className="education-content">
        <div className="education-coursework">
          <h4 className="education-section-title">Relevant Coursework</h4>
          <div className="education-coursework-box">
            <ul className="education-coursework-list">
              <li>Introduction to Business and Management</li>
              <li>Supply Chain Management</li>
              <li>Information Systems Strategy Design</li>
              <li>Information Systems Project Management</li>
              <li>IT Service Management</li>
              <li>Audit of Information Technology</li>
              <li>Science Technology and Society</li>
            </ul>
          </div>
        </div>

        <div className="education-photo-slider-container">
  <img src={IkonKiri} alt="Previous" onClick={prevPhoto} className="education-slider-icon left" />
  <div className={`education-photo-slider ${fade ? 'education-fade-out' : 'education-fade-in'}`}>
    <img src={photos[currentPhotoIndex]} alt="Current" className="education-slider-photo" />
  </div>
  <img src={IkonKanan} alt="Next" onClick={nextPhoto} className="education-slider-icon right" />
</div>


        <div className="education-skills">
          <h4 className="education-section-title">Skills</h4>
          <div className="education-skills-box">
            <ul className="education-skills-list">
              <li>Agile and Scrum methodologies</li>
              <li>Risk management and mitigation</li>
              <li>Gantt charts and project scheduling tools (MS Project, Trello, Jira)</li>
              <li>Product roadmap development</li>
              <li>Data-driven decision making</li>
              <li>Database management (SQL, NoSQL)</li>
              <li>System design and architecture</li>
              <li>Business Presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
