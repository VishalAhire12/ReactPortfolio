import React from 'react';
import { Container, Typography, Grid, Divider } from '@mui/material';
import './resume.css'; // Link to your external CSS file
import CardMedia from '@mui/material/CardMedia';
const Resume = () => {
  return (
    <Container className="resume-container">
   <Typography variant="h4" component="h1" gutterBottom>
    Resume
   </Typography>
      <header className="resume-header">
        <Typography variant="h3" component="h1" gutterBottom>
          Vishal Ahire
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Full Stack Developer
        </Typography>
        <Typography variant="body1" color="textSecondary">
          vishalnahire2019@gmail.com | (+91) 9307506113  
        </Typography>
      </header>

      <Divider className="resume-divider" />

      {/* Summary Section */}
      <CardMedia className='cardMedia'
            component="img"
            height="10"
           
            />
      <section className="resume-section">
        <Typography variant="h5" gutterBottom>
          Summary
        </Typography>
        <Typography variant="body1">
        Innovative and detail-oriented Frontend Software Engineer with a robust background in software development and a strong 
passion for creating user-centric solutions. Proven ability to collaborate with cross-functional teams to design, develop, and 
deploy scalable and efficient web applications. Skilled in modern frontend technologies including JavaScript, HTML/CSS, and 
React, with a keen interest in learning and integrating new technologies to solve complex technical challenges. 
        </Typography>
      </section>

      <Divider className="resume-divider" />

      {/* Education Section */}
      <CardMedia className='cardMedia'
            component="img"
            height="10"
           
            />
      <section className="resume-section">
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              Bachelor of Engineering
            </Typography>
            <Typography variant="body2" color="textSecondary">
             MET Institute of Engineering Nashik | 2019 - 2023
            </Typography>
            <Typography variant="h6">
              HSC 12th
            </Typography>
            <Typography variant="body2" color="textSecondary">
             T.R.Collage Malegaon | 2018- 2019
            </Typography>
            <Typography variant="h6">
              SSC 10th
            </Typography>
            <Typography variant="body2" color="textSecondary">
              R.A.Madhyamik Vidyalay Nimbole| 2016 - 2017
            </Typography>
          </Grid>
        </Grid>
      </section>

      <Divider className="resume-divider" />

      {/* Experience Section */}
      <CardMedia className='cardMedia'
            component="img"
            height="10"
           
            />
      <section className="resume-section">
      
        <Typography variant="h5" gutterBottom>
          Internship
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
            Frontend Developer
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Oasis Infobyte. | 2022
            </Typography>
            <Typography variant="body1">
              - Developed and maintained web applications using React and Node.js.<br/>
              - Collaborated with cross-functional teams to define and design new features.<br />
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
           
          </Grid>
        </Grid>
      </section>
       {/* Experience Section */}
       <CardMedia className='cardMedia'
            component="img"
            height="10"
           
            />
      <section className="resume-section">
      
        <Typography variant="h5" gutterBottom>
         Project
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
            Vitual Data Hiding
            </Typography>
            <Typography variant="body2" color="textSecondary">
            Technologies : Java , HTML , CSS , JavaScript , MySQL. 
            </Typography>
            <Typography variant="body1">
              - Visual data hiding is a technique that embeds information within visual media, primarily images, in a way that is imperceptible to the human eye. <br />
              - It is achieved by making changes in the pixels of the image to render the information.<br />
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
           
            
          </Grid>
        </Grid>
      </section>
      
      <Divider className="resume-divider" />

      <Divider className="resume-divider" />

      {/* Skills Section */}
      <CardMedia className='cardMedia'
            component="img"
            height="10"
           
            />
      <section className="resume-section">
      
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1">
        - Core Java<br/>
        - JavaScript<br/>
        - HTML5<br/>
        - CSS3<br/>
        - React<br/>
        - SQL
        </Typography>
      </section>
      <CardMedia className='cardMedia'
            component="img"
            height="10"
           
            />
    </Container>
  );
};

export default Resume;
