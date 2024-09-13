import React from 'react';
import './about.css';
import css from '../img/hand.png';
import linkedinIcon from '../img/linkedin.png';
import twitterIcon from '../img/instagram.png';
import facebookIcon from '../img/facebook.png';
const About = () => {
  return (
    
    <div className='grid-container'>
      <div className='grid-item'>





      </div>
      <div className='grid-item1'>
      <h1>Hello <img src={css}  className="social-icon4" />I Am Vishal Ahire</h1>
        <p className='sentence'>
          Full Stack Developer!
          I'm Vishal Ahire & I'm from Nashik. I'm an engineering graduate from MET College specialized in Computer Science. I've worked hard in my education & maintained a CGPA of 7.87 Along with my degree I've completed Java, SQL and Full Stack Courses offline.Now I'm ready to apply my knowledge into practice.Though I do not have any real life working experience, I've had a lot of exposure to the software field. My Goal is to build a successfull career as a Full Stack Developer.Moving forward in my career I hope to expand my experience across different industries. I'm a good learner and team player That's all about my self.
        </p>
        <a href="https://www.linkedin.com/in/vishal-ahire-797557231?" target="_blank" rel="noopener noreferrer">
          <button className='link-btn' >
            Follow On LinkedIn
          </button>
        </a>
        <div className="social-media">
        <a href="https://www.linkedin.com/in/vishal-ahire-797557231?" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon2" />
        </a>
        <a href="https://www.instagram.com/basic_python/?hl=en" target="_blank" rel="noopener noreferrer" >
          <img src={twitterIcon} alt="Twitter" className="social-icon2" />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon2" />
        </a>
      </div>

      </div>
    </div>
  );
};

export default About;
