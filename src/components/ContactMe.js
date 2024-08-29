import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

const ContactMe = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_e7ddy3d', 'template_0gbjdbp', formState, '94evNbe1Y9v7xLB2C')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setFormState({ name: '', email: '', message: '' }); // Reset form after submission
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again later.');
      });
  };

  return (
    <div className="page-container"> {/* Flex container for centering */}
      <div className="contact-me-section">
        <h2 className="contact-title">Stay Connected</h2>
        <p className="contact-subtitle">I'd love to hear from you! Drop a message or connect with me on social media.</p>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formState.name} 
              onChange={handleChange} 
              required 
            />
            <span className="focus-border"></span>
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formState.email} 
              onChange={handleChange} 
              required 
            />
            <span className="focus-border"></span>
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formState.message} 
              onChange={handleChange} 
              required 
            />
            <span className="focus-border"></span>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>
        <div className="contact-links">
          <p>Find me on <a href="https://www.linkedin.com/in/zainalshahab/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://www.instagram.com/zainallshahab/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
