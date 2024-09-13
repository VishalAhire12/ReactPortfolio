import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import image from '../img/curren.png';
import image2 from '../img/eccom.png';
import image1 from '../img/stego.png';
import './project.css'; // Import the CSS file

const Project = () => {
  const [overlayImage, setOverlayImage] = useState(null);

  const showOverlay = (imageSrc) => {
    setOverlayImage(imageSrc);
  };

  const hideOverlay = () => {
    setOverlayImage(null);
  };

  return (
    
    <div className="project-container">
    
      {/* First Card */}
      <Card className="project-card">
        <CardActionArea onClick={() => showOverlay(image1)}>
          <CardMedia
            component="img"
            height="200"
            image={image1}
            alt="Image Steganography"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Image Steganography
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Steganography is the practice of concealing information within the data of digital images without altering their visual appearance. The hidden data can include text, images, audio, or any other form of binary information.In the most common form of image steganography, the hidden message is embedded in the least significant bits (LSBs) of the images pixel data. Modifying these LSBs slightly does not change the appearance of the image to the human eye, but these tiny changes are enough to encode the hidden message.'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button  className='button1'>
            Link
          </Button>
        </CardActions>
      </Card>

      {/* Second Card */}
      <Card className="project-card">
        <CardActionArea onClick={() => showOverlay(image2)}>
          <CardMedia
            component="img"
            height="200"
            image={image2}
            alt="E-Commerce Project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              E-Commerce Website
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'The E-Commerce Website Project is one of the most common software development projects. In this article, we will make the E-Commerce Website Project, from scratch, for final-year students. We will cover all the steps you must do while developing this project.In today’s digital-first world, businesses are increasingly moving online to reach broader audiences, improve customer experience, and drive sales. Small and medium-sized retailers, in particular, are looking for ways to establish an online presence that helps them compete in the growing e-commerce industry.'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button className='button1'>
          Link
        </Button>
      </CardActions>
      </Card>

      {/* Third Card */}
      <Card className="project-card">
        <CardActionArea onClick={() => showOverlay(image)}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="Another Image Steganography Project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Currency Converter 
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'A currency converter is a tool that converts one currency value or quantity into the relative values or amounts of other currencies. Currency conversion is carried out by utilising specialised software programmes that are created to be rapid and precise. Currency converters, which are widely and freely available online, can quickly convert the value of one currency into another. You can, for example, quickly convert dollars to rupees or rupees to pounds, and vice versa.'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className='button1'>
            Link
          </Button >
        </CardActions>
      </Card>

      {/* Fullscreen Image Overlay */}
      {overlayImage && (
        <div className="image-overlay show" onClick={hideOverlay}>
          <span className="close-button" onClick={hideOverlay}>&times;</span>
          <img src={overlayImage} alt="Full View" />
        </div>
      )}
    </div>
  );
};

export default Project;
