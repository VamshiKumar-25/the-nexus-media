import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Portrait Session',
    preferredDate: '',
    details: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'loading', or 'submitted'

  // Function to get today's date in YYYY-MM-DD format for the date picker minimum
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Universal handler to update form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading'); // Set status to loading

    try {
      const response = await fetch('https://the-nexus-media.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('submitted'); // Set status to submitted on success
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send booking request. ' + error.message);
      setSubmissionStatus('idle'); // Reset status on error
    }
  };

  // Handler for closing the modal, which also resets the form states
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmissionStatus('idle');
      setFormData({
        fullName: '', email: '', phone: '', serviceType: 'Portrait Session', preferredDate: '', details: '',
      });
    }, 300); // Delay to allow animation to finish
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>×</button>
        
        {submissionStatus === 'submitted' ? (
          // --- SUCCESS MESSAGE ---
          <div className="success-message">
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            <h2>Submitted Successfully!</h2>
            <p>Thank you for your booking request. We will get back to you shortly.</p>
          </div>
        ) : (
          // --- BOOKING FORM ---
          <>
            <h2>Book a Photography Session</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group form-group-half" style={{ marginRight: '4%' }}>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Your name" required value={formData.fullName} onChange={handleChange} />
              </div>
              <div className="form-group form-group-half">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required value={formData.phone} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}>
                  <option>Portrait Session</option>
                  <option>Wedding Photography</option>
                  <option>Commercial Shoot</option>
                  <option>Event Coverage</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date</label>
                <input 
                  type="date" 
                  id="preferredDate" 
                  required
                  name="preferredDate" 
                  value={formData.preferredDate} 
                  onChange={handleChange}
                  min={getTodayString()}
                />
              </div>

              <div className="form-group">
                <label htmlFor="details">Additional Details</label>
                <textarea id="details" name="details" rows="4" placeholder="Tell us about your vision..." required value={formData.details} onChange={handleChange}></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn"
                disabled={submissionStatus === 'loading'}
              >
                {submissionStatus === 'loading' ? (
                  <div className="loading-spinner"></div>
                ) : (
                  'Submit Booking Request'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;