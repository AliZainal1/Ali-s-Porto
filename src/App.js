// App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Tidak perlu impor BrowserRouter di sini
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import OrganizationExperience from './components/OrganizationExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <section id="home">
                <HomePage />
              </section>
              <section id="about">
                <AboutMe />
              </section>
              <section id="education">
                <Education />
              </section>
              <section id="work-experience">
                <WorkExperience />
              </section>
              <section id="organization-experience">
                <OrganizationExperience />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="certifications">
                <Certifications />
              </section>
              <section id="contact">
                <ContactMe />
              </section>
            </>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
