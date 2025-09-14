import React, { useState, useEffect } from 'react';

// Your exact image imports
import portraitImg from '../assets/corporate-photography.jpg';
import weddingImg from '../assets/wedding-photography.jpg';
import productImg from '../assets/product-photography.jpg';
import fashionImg from '../assets/fashion-photography.jpg';
import eventImg from '../assets/event-photography.png';
import brandImg from '../assets/campaign-photography.jpg';

const allPortfolioItems = [
  { id: 1, title: 'Corporate Headshots', subtitle: 'Professional headshots for business executives', category: 'Portrait', img: portraitImg },
  { id: 2, title: 'Wedding Ceremony', subtitle: 'Capturing your once-in-a-lifetime moments', category: 'Wedding', img: weddingImg },
  { id: 3, title: 'Product Photography', subtitle: 'Stunning visuals for your brand and products', category: 'Commercial', img: productImg },
  { id: 4, title: 'Fashion Portrait', subtitle: 'Creative fashion and lifestyle portraits', category: 'Portrait', img: fashionImg },
  { id: 5, title: 'Corporate Event', subtitle: 'Documenting your important company milestones', category: 'Event', img: eventImg },
  { id: 6, title: 'Brand Campaign', subtitle: 'Visual storytelling for your marketing campaigns', category: 'Commercial', img: brandImg },
];

// In client/src/components/FeaturedWork.js

const PortfolioCard = ({ item }) => (
  <div className="portfolio-card">
    <img src={item.img} alt={item.title} />
    
    {/* This is the text that appears on hover */}
    <div className="card-hover-text">
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
    </div>
  </div>
);

const FeaturedWork = () => {
  const [activeFilter, setActiveFilter] = useState('All Work');
  const [filteredItems, setFilteredItems] = useState(allPortfolioItems);

  useEffect(() => {
    if (activeFilter === 'All Work') {
      setFilteredItems(allPortfolioItems);
    } else {
      const newFilteredItems = allPortfolioItems.filter(
        (item) => item.category === activeFilter
      );
      setFilteredItems(newFilteredItems);
    }
  }, [activeFilter]);

  const filterCategories = ['All Work', 'Portrait', 'Wedding', 'Commercial', 'Event'];

  return (
    <section id="portfolio" className="featured-work">
      <h2>Featured Work</h2>
      <p>Explore our diverse portfolio showcasing professional photography across various industries and styles.</p>
      
      <div className="filter-buttons">
        {filterCategories.map((category) => (
          <button
            key={category}
            className={activeFilter === category ? 'active' : ''}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;