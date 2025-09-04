import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const popularSearches = [
    'Website Design', 
    'WordPress', 
    'Logo Design', 
    'Dropshipping'
  ];

  return (
    <section className="hero">
      <div className="container">
        <h1>Find the right freelance service, right away</h1>
        
        <div className="search-container">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="What service are you looking for today?" 
            />
            <button className="search-btn">Search</button>
          </div>
          
          <div className="popular-searches">
            <span>Popular: </span>
            {popularSearches.map((search, index) => (
              <Link to={`/search?q=${search.toLowerCase().replace(' ', '-')}`} key={index}>
                {search}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
