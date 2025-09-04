import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">freelancer</Link>
        
        <div className="search-box mobile-hide">
          <input type="text" placeholder="Search for services..." />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        
        <nav className="main-nav">
          <Link to="/how-it-works" className="active">How it Works</Link>
          <Link to="/browse">Browse Jobs</Link>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="btn btn-outline">Sign Up</Link>
          <Link to="/post-job" className="btn btn-primary">Post a Project</Link>
        </nav>
        
        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
