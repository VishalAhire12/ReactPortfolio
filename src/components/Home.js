import React, { useState } from 'react';
import './Home.css'; // Import external CSS
import image2 from '../img/dev.png';
import linkedinIcon from '../img/linkedin.png';
import twitterIcon from '../img/instagram.png';
import facebookIcon from '../img/facebook.png';
import html from '../img/html-5.png';
import css from '../img/social.png';
import javaScript from '../img/js.png';
import java from '../img/java.png';
import react from '../img/react.png';
import git from '../img/git.png';
import { Link } from 'react-router-dom'; 
function Card3D() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className='allbody'>
    <div className="card-container" onClick={handleClick}>
      
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
        
        <h2></h2>
        </div>
        <div className="card-back">
        <img src={image2} alt="Front" />
          
        </div>
        <div className='image'>
      <img src={image2} alt="Front" />
      </div>
      </div>
      
    </div>
    <div className="outside-content">
        <h1 className='font'>Full Stack Developer</h1>
        <p className='font'>
        Hi, I'm Vishal Ahire. A passionate in full stack developer.
        </p>
       
        <div className="social-media">
        <a href="https://www.linkedin.com/in/vishal-ahire-797557231?" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon1" />
        </a>
        <a href="https://www.instagram.com/basic_python/?hl=en" target="_blank" rel="noopener noreferrer" >
          <img src={twitterIcon} alt="Twitter" className="social-icon1" />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon1" />
        </a>
      </div>
      <div>
      <label className='font'>Tech Stack</label>
      </div>
      <div className='png'>
        <img src={html} alt="LinkedIn" className="social-icon" />
        <img src={css} alt="LinkedIn" className="social-icon" />
        <img src={javaScript} alt="LinkedIn" className="social-icon" />
        <img src={java} alt="LinkedIn" className="social-icon" />
        <img src={react} alt="LinkedIn" className="social-icon" />
        <img src={git} alt="LinkedIn" className="social-icon" />
      </div>
      <div className='linkbutton'>
      <Link to="/resume">
      <button className="link-btn">Resume</button>
      </Link>
      <Link to="/project">
      <button className="link-btn">Project</button>
      </Link>
      </div>
      </div>
    </div>
  
  );
}

export default Card3D;
