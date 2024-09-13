import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    
    <Router>
      <Navbar />
    
      
      <Routes>
        <Route path="/Project" element={<Project />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/footer" element={<ContactUs />} /> */}
      </Routes>
      
    </Router>
    
  );
}

export default App;
