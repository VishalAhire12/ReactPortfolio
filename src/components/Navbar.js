
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import React, { useState } from 'react';
const Navbar = () => {
    const [text, setText] = useState('Full Stack Developer');
  
    const handleClick = () => {
      setText((prevText) => (prevText === 'Full Stack Developer' ? 'Vishal Ahire' : 'Full Stack Developer'));
    };
  return (
    <AppBar position="static" className="Navbar"> {/* Apply the navbar class */}
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 2 }} onClick={handleClick}>
        {text}
        </Typography>
        <Link to="/Home" className="Navbar-link">Home</Link>
        <Link to="/Project" className="Navbar-link">Projects</Link> {/* Apply navbar-link class */}
        
        <Link to="/Resume" className="Navbar-link">Resume</Link>
        <Link to="/About" className="Navbar-link">About</Link>
        <Link to="/ContactUs" className="Navbar-link">Contact Us</Link>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
