import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    { name: 'Website Design', count: 1.2 },
    { name: 'Mobile App Development', count: 1.1 },
    { name: 'Logo Design', count: 0.9 },
    { name: 'WordPress', count: 0.8 },
    { name: 'Dropshipping', count: 0.7 },
    { name: 'Social Media', count: 0.6 },
    { name: 'SEO', count: 0.5 },
    { name: 'Video Editing', count: 0.4 },
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2>Popular professional services</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  key={index} 
                  className="category-card">
              <h3>{category.name}</h3>
              <p>{category.count}M+ services available</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
