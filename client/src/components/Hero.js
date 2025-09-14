import React from 'react';
// 1. Import the image at the top
import heroImage from '../assets/hero-background.jpg';

const Hero = () => {
  // 2. Define the style object for the background
  const heroStyle = {
    // The url() now uses the imported image variable
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`
  };

  return (
    // 3. Apply the style directly to the section
    <section className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1>Capturing<br/>Stories Through<br/><span className="highlight">Visual Excellence</span></h1>
        <p>Professional photography services that bring your vision to life with cinematic quality and artistic precision.</p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;