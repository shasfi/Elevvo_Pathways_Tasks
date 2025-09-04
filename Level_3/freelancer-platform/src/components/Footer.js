import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    categories: [
      'Graphic Design',
      'Digital Marketing',
      'Writing & Translation',
      'Video & Animation'
    ],
    about: [
      'Careers',
      'Press & News',
      'Partnerships'
    ],
    support: [
      'Help & Support',
      'Trust & Safety',
      'Selling on Freelancer'
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Categories</h4>
            {footerLinks.categories.map((link, index) => (
              <Link to={`/category/${link.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                {link}
              </Link>
            ))}
          </div>
          
          <div className="footer-section">
            <h4>About</h4>
            {footerLinks.about.map((link, index) => (
              <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                {link}
              </Link>
            ))}
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            {footerLinks.support.map((link, index) => (
              <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                {link}
              </Link>
            ))}
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Freelancer - All Rights Reserved</p>
          <div className="footer-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
