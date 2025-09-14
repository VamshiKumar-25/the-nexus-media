import React from 'react';
// 1. Import FontAwesomeIcon and the star icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// --- (Keep your aboutPhoto import here) ---
import aboutPhoto from '../assets/professional-photographer.jpg';


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About The Nexus Media</h2>
        <p>
          With over a decade of experience in professional photography, we specialize
          in creating compelling visual narratives that capture the essence of every
          moment. Our cinematic approach combines technical excellence with
          artistic vision.
        </p>
        <div className="about-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
        {/* 2. Add the new star rating section */}
        <div className="stat-item rating">
            <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <p>5.0 Client Rating</p>
        </div>
      </div>
      <div className="about-image">
        <img src={aboutPhoto} alt="Photographer in action" />
      </div>
    </section>
  );
};

export default About;