import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Change the import to get all icons from the 'regular' package
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons';

const CTA = ({ onBookSessionClick }) => {
  return (
    <section id="contact" className="cta-section">
      <h2>Ready to Create Something Amazing?</h2>
      <p>Let's discuss your vision and bring it to life through professional photography.</p>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:saidinesha@gmail.com">hello@nexusmedia.com</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+917676243644">+91 76762 43644</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faClock} />
          <span>Mon-Fri 9AM-6PM</span>
        </div>
      </div>
      <button onClick={onBookSessionClick} className="btn btn-primary">Book Your Session Today</button>
    </section>
  );
};

export default CTA;