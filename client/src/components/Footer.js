import React from 'react';
// 1. Import your logo image
import nexusLogo from '../assets/tnm-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* 2. Add the same logo structure as the Navbar */}
      <div className="logo-container">
        <img src={nexusLogo} alt="The Nexus Media Logo" className="logo-icon-img" />
        <div className="logo-text">
          <span className="logo-main">THE NEXUS</span>
          <span className="logo-sub">MEDIA</span>
        </div>
      </div>
      {/* 3. Update the year in the copyright text */}
      <p>&copy; 2025 The Nexus Media. All rights reserved. Professional photography services.</p>
    </footer>
  );
};

export default Footer;