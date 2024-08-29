// Projects.js
import React from 'react';
import './Projects.css'; // Impor file CSS untuk styling

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      
      <div className="projects-grid">
        
        {/* Card for XLance Project */}
        <div className="project-card">
          <div className="project-card-header">
            <div className="project-icon">📱</div> {/* Ikon Proyek */}
            <div className="project-title-container">
              <h3 className="project-title">Project Manager - XLance (SPM Office Performance)</h3>
              <p className="project-location-duration">Jakarta, Indonesia | February 2024 - July 2024</p>
            </div>
          </div>
          <p className="project-description">
            Oversaw the execution of the SuperApp project, covering 5 strategic initiatives from the SPM Office at XL Axiata Tbk. Ensured alignment of project objectives with company goals, resulting in a 15% increase in project efficiency. Implemented action items from retrospective sessions, resulting in a 10% increase in project productivity. Collaborated with department heads to customize XLance features, ensuring alignment with departmental needs and workflows.
          </p>
          <a href="https://drive.google.com/drive/folders/18zuwmyRjyxZbBrg7fsD8RNnRsrJrIVN_?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project Details</button>
          </a>
        </div>

        {/* Card for Urban Scholaria Project */}
        <div className="project-card">
          <div className="project-card-header">
            <div className="project-icon">🏫</div> {/* Ikon Proyek */}
            <div className="project-title-container">
              <h3 className="project-title">Project Manager - Urban Scholaria</h3>
              <p className="project-location-duration">Surabaya, Indonesia | August 2023 - December 2023</p>
            </div>
          </div>
          <p className="project-description">
            As the Project Manager of Urban Scholaria, a groundbreaking integrated web and mobile application, I am thrilled to share insights into this transformative project that promises to streamline and simplify the process of applying for educational building permits, ranging from pre-schools to high schools. Urban Scholaria serves as a comprehensive platform designed to facilitate three crucial aspects of educational building permits.
          </p>
          <a href="https://drive.google.com/drive/folders/1xHHEEYs_lFgbBG1CWkUJu9LVWDXH0qD3?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project Details</button>
          </a>
        </div>

        {/* Card for Jembul Smart Village Project */}
        <div className="project-card">
          <div className="project-card-header">
            <div className="project-icon">🌍</div> {/* Ikon Proyek */}
            <div className="project-title-container">
              <h3 className="project-title">Documentator - Jembul Smart Village</h3>
              <p className="project-location-duration">Mojokerto, Indonesia | April 2023 - November 2023</p>
            </div>
          </div>
          <p className="project-description">
            As a dedicated Documentator and Quality Assurance specialist, I am excited to present Jembul Smart Village—an innovative website designed to showcase and enhance the essence of Jembul, a vibrant village nestled within the city of Mojokerto. Jembul Smart Village serves as an immersive digital platform, offering a multifaceted representation of the community.
          </p>
          <a href="https://drive.google.com/drive/folders/1_RhZbH7_fXPo9nRLTUj__HpplQ-lIuNZ?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project Details</button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;
