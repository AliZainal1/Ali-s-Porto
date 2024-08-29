// WorkExperience.js
import React from 'react';
import './WorkExperience.css'; // Impor file CSS yang telah ditingkatkan

const WorkExperience = () => {
  return (
    <div className="work-experience-section">
      <h2 className="work-experience-title">Work Experience</h2>
      
      <div className="work-experience-timeline">
        
        {/* Card for XL Axiata */}
        <div className="work-card">
          <div className="work-card-header">
            <h3 className="company-title">PT XL Axiata Tbk</h3>
            <p className="position-title">Agile Transformation, CEO Office</p>
            <p className="location-duration">Jakarta, Indonesia | February 2024 - July 2024</p>
          </div>
          <ul className="work-details">
            <li>Developed over 10 data visualizations for PMO performance dashboards, increasing team's understanding by 30%.</li>
            <li>Identified and analyzed more than 15 innovation streams post-Q1, improving efficiency in managing innovation and shortening decision-making time by 25%.</li>
            <li>Improved average project KPI achievement by 15% through effective project management, ensuring fulfillment of over 95% of all project milestones set by the management team.</li>
            <li>Awarded 2nd place in the X-Pitch competition for presenting a business proposal aimed at increasing profitability for XL Axiata.</li>
          </ul>
        </div>

        {/* Card for Rakamin Academy */}
        <div className="work-card">
          <div className="work-card-header">
            <h3 className="company-title">Rakamin Academy</h3>
            <p className="position-title">Product Management</p>
            <p className="location-duration">Surabaya, Indonesia | November 2023 - January 2024</p>
          </div>
          <ul className="work-details">
            <li>Led product development at Rakamin Academy, aligning goals with user needs.</li>
            <li>Increased team productivity by 15% through streamlined agile processes.</li>
            <li>Achieved a 25% improvement in on-time delivery of product features through effective agile management.</li>
            <li>Used data to enhance product features and user satisfaction.</li>
          </ul>
        </div>

        {/* Card for Schoters */}
        <div className="work-card">
          <div className="work-card-header">
            <h3 className="company-title">Schoters</h3>
            <p className="position-title">Copywriter</p>
            <p className="location-duration">Surabaya, Indonesia | May 2023 - Jun 2023</p>
          </div>
          <ul className="work-details">
            <li>Compelling Storytelling</li>
            <li>SEO-Optimized Content</li>
            <li>Multichannel Campaign Collaboration</li>
          </ul>
        </div>

        {/* Card for Qwords Cloud Web Hosting Indonesia */}
        <div className="work-card">
          <div className="work-card-header">
            <h3 className="company-title">Qwords Cloud Web Hosting Indonesia</h3>
            <p className="position-title">Digital Marketing Specialist</p>
            <p className="location-duration">Surabaya, Indonesia | July 2023 - September 2023</p>
          </div>
          <ul className="work-details">
            <li>Strategic Content Development</li>
            <li>Social Media Optimization (SMO)</li>
            <li>Data-Driven Decision Making</li>
            <li>SEO Mastery</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default WorkExperience;
