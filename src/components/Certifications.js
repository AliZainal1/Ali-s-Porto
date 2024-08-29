// Certifications.js
import React from 'react';
import './Certifications.css'; // Impor file CSS untuk styling
import Cert1 from './1s.png';
import Cert2 from './2s.png';
import Cert3 from './3s.png';
import Cert4 from './4s.png';
import Cert5 from './5s.png';
import Cert6 from './6s.png';
import Cert7 from './9s.png'; // Sertifikat 7 menggunakan gambar 9s
import Cert8 from './8s.png';
import Cert9 from './7s.png'; // Sertifikat 9 menggunakan gambar 7s


const Certifications = () => {
  const certifications = [
    { title: "Agile Project Management, Google, 2024", image: Cert1 },
    { title: "Microsoft Certified - Azure AI Fundamentals, Microsoft, 2024", image: Cert2 },
    { title: "Foundation of Project Management, Google, 2023", image: Cert3 },
    { title: "Product Management Specialist, Rakamin Academy, 2023", image: Cert4 },
    { title: "Building Forming Product, MySkill, 2023", image: Cert5 },
    { title: "Product Testing and Verification, MySkill, 2023", image: Cert6 },
    { title: "Project Closure, MySkill, 2023", image: Cert7 },
    { title: "Scrum Event, MySkill, 2023", image: Cert8 },
    { title: "Solution Dev and Priority, MySkill, 2023", image: Cert9 },
  ];

  return (
    <div className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={cert.image} alt={`Certificate ${index + 1}`} className="certification-image" />
            <div className="certification-overlay">
              <p className="certification-text">{cert.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
