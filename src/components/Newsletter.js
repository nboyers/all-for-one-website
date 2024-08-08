import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import './CSS/Newsletter.css';
import LOGO from './assets/logo.png'; // Correctly import the logo

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <nav className="Nav">
        <div className="Nav-inner">
          <div className="Nav-wrapper">
          <Link className="Nav-logo" to="/">
              <img src={LOGO} alt="Logo" /> {/* Use the imported logo */}
            </Link>
            <ul className="Nav-links">
              <li className="Nav-links-item">
                <Link to="/calendar">Programs</Link>
              </li>
              <li className="Nav-links-item">
                <Link to="/what-we-stand-for">Get Involved</Link>
              </li>
              <li className="Nav-links-item">
                <Link to="/newsletter">Locations</Link>
              </li>
              <li className="Nav-links-item">
                <Link to="/discussion-board">About Us</Link>
              </li>
              <li className="Nav-links-item">
                <Link to="/donate-shop">Donate</Link>
              </li>
            </ul>
            <button className="Nav-subscribe-toggle" onClick={handleToggle}>
              News Letter
            </button>
          </div>
        </div>
      </nav>
      {isVisible && (
        <div className="newsletter-extension">
          <div className="newsletter-content">
            <h2>Subscribe to our newsletter!</h2>
            <form>
              <div className="form-group">
                <label>Email (required)</label>
                <input type="email" placeholder="Enter your email here" required />
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" required /> Check the box to agree with privacy policy (required)
                </label>
              </div>
              <button type="submit" className="sign-up-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
