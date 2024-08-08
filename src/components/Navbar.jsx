import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import Newsletter from './Newsletter';
import LOGO from './assets/logo.png'; // Correctly import the logo

const Navbar = ({ links }) => {
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
              {links.map((link, index) => (
                <li className="Nav-links-item" key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
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
