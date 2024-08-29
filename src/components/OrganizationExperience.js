// OrganizationExperience.js
import React from 'react';
import './OrganizationExperience.css'; // Impor file CSS yang telah ditingkatkan

const OrganizationExperience = () => {
  return (
    <div className="organization-experience-section">
      <h2 className="organization-experience-title">Organization Experience</h2>
      
      <div className="organization-experience-timeline">

        {/* Card for Google Developer Student Clubs */}
        <div className="organization-card fresh-card">
          <div className="organization-card-header">
            <div className="organization-icon">🌟</div> {/* Tambahkan ikon atau gambar */}
            <h3 className="organization-title">Google Developer Student Clubs @ Unesa 2023</h3>
            <p className="position-title">Leader</p>
            <p className="location-duration">Surabaya, Indonesia | August 2023 - Present</p>
          </div>
          <div className="organization-details">
            <p>Excited to share that I've embraced a leadership role as the head of Google Developer Student Clubs at Universitas Negeri Surabaya (Unesa). In this dynamic position, I'm steering a talented team, fostering innovation, and spearheading initiatives that bridge the gap between academia and real-world tech challenges.</p>
            <p>Leading GDSC @ Unesa is more than a title; it's a commitment to cultivating a vibrant community where creativity, collaboration, and cutting-edge technology converge. We're not just coding; we're crafting opportunities, sparking ideas, and building a legacy of innovation.</p>
            <p>Eager to explore the limitless possibilities that lie ahead and to empower the next generation of tech enthusiasts!</p>
          </div>
        </div>

        {/* Card for HIMTI UNESA */}
        <div className="organization-card fresh-card">
          <div className="organization-card-header">
            <div className="organization-icon">🔧</div> {/* Tambahkan ikon atau gambar */}
            <h3 className="organization-title">HIMTI UNESA</h3>
            <p className="position-title">Chief Operating Officer</p>
            <p className="location-duration">Surabaya, Indonesia | January 2023 - December 2023</p>
          </div>
          <div className="organization-details">
            <p>Delighted to announce my role as the Chief Operating Officer at the Informatics Engineering Student Association, where I am steering operations with a focus on innovation, efficiency, and collaborative success.</p>
            <p>In this dynamic position, I am leading a team dedicated to fostering a thriving community within the realm of technology and information systems. Beyond titles, it's about orchestrating impactful projects, streamlining processes, and ensuring a seamless experience for every member.</p>
          </div>
        </div>

        {/* Card for Google I/O Extended Surabaya */}
        <div className="organization-card fresh-card">
          <div className="organization-card-header">
            <div className="organization-icon">📅</div> {/* Tambahkan ikon atau gambar */}
            <h3 className="organization-title">Google I/O Extended Surabaya</h3>
            <p className="position-title">Event Staff</p>
            <p className="location-duration">Surabaya, Indonesia | June 2024 - August 2024</p>
          </div>
          <div className="organization-details">
            <ul className="organization-details-list">
              <li><strong>Event Coordination and Logistics:</strong> Assisted in organizing and managing event logistics, including venue setup, registration, and attendee coordination.</li>
              <li><strong>Attendee Support:</strong> Provided exceptional customer service by addressing attendee inquiries, guiding them through the event schedule.</li>
              <li><strong>Technical Assistance:</strong> Supported the technical team in setting up and maintaining AV equipment, troubleshooting issues during sessions.</li>
            </ul>
          </div>
        </div>

        {/* Card for Google Hackfest Indonesia */}
        <div className="organization-card fresh-card">
          <div className="organization-card-header">
            <div className="organization-icon">💻</div> {/* Tambahkan ikon atau gambar */}
            <h3 className="organization-title">Google Hackfest Indonesia 2024</h3>
            <p className="position-title">Event Staff</p>
            <p className="location-duration">Jakarta, Indonesia | November 2023 - January 2024</p>
          </div>
          <div className="organization-details">
            <ul className="organization-details-list">
              <li><strong>Hackathon Management:</strong> Coordinated the setup and execution of the hackathon, including participant registration, team formations, and project submissions, ensuring a seamless and engaging experience for all attendees.</li>
              <li><strong>Participant Support:</strong> Provided comprehensive support to participants, assisting with queries, facilitating communication between teams and mentors, and ensuring access to necessary resources and tools.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrganizationExperience;
