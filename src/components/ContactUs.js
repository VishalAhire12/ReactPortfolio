// src/ContactUs.js

import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

// Import social media images
import linkedinIcon from '../img/linkedin.png';
import twitterIcon from '../img/instagram.png';
import facebookIcon from '../img/facebook.png';

export default function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Replace with your actual access key from Web3Forms
    formData.append("access_key", "137dc9cc-07ad-4e05-af1b-a8e8fcab097e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Submission failed, please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className='flex'>
<div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit} >
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Submit Form</button>
      </form>

      <span className={result.includes("Successfully") ? '' : 'error'}>{result}</span>
      
      <div className="social-media">
        <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/basic_python/?hl=en" target="_blank" rel="noopener noreferrer" >
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
      </div>
      </div>
    </div>
    
  );
}
