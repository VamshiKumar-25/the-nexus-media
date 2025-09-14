import React, { useState } from 'react'; // Import useState
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal'; // 1. Import the Modal component

function App() {
  // 2. Add state for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3. Create functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      {/* 4. Pass the openModal function to Navbar */}
      <Navbar onBookSessionClick={openModal} />
      <Hero />
      <main>
        <FeaturedWork />
        <About />
        <Services />
        {/* Pass the openModal function to CTA as well */}
        <CTA onBookSessionClick={openModal} />
      </main>
      <Footer />
      {/* 5. Render the Modal and pass its state and close function */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;