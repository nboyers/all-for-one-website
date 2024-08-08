import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import Newsletter from './Newsletter';
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
                <Link to="/calendar">Calendar</Link>
              </li>
              <li className="Nav-links-item">
                <Link to="/what-we-stand-for">Who we are</Link>
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
      {isVisible && <Newsletter />}
    </>
  );
};

export default Navbar;
