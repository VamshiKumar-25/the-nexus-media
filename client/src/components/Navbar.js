import React, { useState, useEffect } from 'react';
import nexusLogo from '../assets/tnm-logo.png';

const Navbar = ({ onBookSessionClick }) => {
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    // window.scrollY gives the number of pixels the document is currently scrolled vertically
    const offset = window.scrollY;
    if (offset > 50) { // We can set a threshold, e.g., 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // useEffect hook to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    // Conditionally add the 'navbar-scrolled' class
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo-container">
        <img src={nexusLogo} alt="The Nexus Media Logo" className="logo-icon-img" />
        <div className="logo-text">
          <span className="logo-main">THE NEXUS</span>
          <span className="logo-sub">MEDIA</span>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
      <button onClick={onBookSessionClick} className="btn btn-primary nav-btn">Book Session</button>
    </header>
  );
};

export default Navbar;