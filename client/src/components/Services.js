import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

// 1. Import your custom PNG icons
import portraitIcon from '../assets/picture.png';
import weddingIcon from '../assets/clapper.png';
import commercialIcon from '../assets/commercial.png';
import eventIcon from '../assets/drone.png';


// Updated ServiceCard component
const ServiceCard = ({ icon, title, description, duration, price }) => (
  <div className="service-card">
    <div className="service-icon">
      <img src={icon} alt={`${title} icon`} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="service-details">
      <div className="detail-item">
        {/* Replace the emoji with the Font Awesome icon */}
        <FontAwesomeIcon icon={faClock} /> 
        <span>{duration}</span>
      </div>
      <div className="detail-item price">
        Starting at ₹{price}
      </div>
    </div>
  </div>
);

// ... rest of the Services component remains the same
const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <p>Comprehensive photography services tailored to meet your unique needs and vision.</p>
      <div className="services-grid">
        <ServiceCard
          icon={portraitIcon}
          title="Portrait Photography"
          description="Professional headshots and personal portraits."
          duration="5-6 hours"
          price="9,999"
        />
        <ServiceCard
          icon={weddingIcon}
          title="Reels Shooting"
          description="Viral-ready vertical content for socials."
          duration="1-3 hours"
          price="1,999"
        />
        <ServiceCard
          icon={commercialIcon}
          title="Commercial Shoots"
          description="Brand and product photography for businesses."
          duration="2-4 hours"
          price="4,999"
        />
        <ServiceCard
          icon={eventIcon}
          title="Skyview Videography"
          description="Dynamic perspectives from high above."
          duration="1-2 hours"
          price="14,999"
        />
      </div>
    </section>
  );
};

export default Services;
