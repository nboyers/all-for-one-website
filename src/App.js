import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import WhatWeStandFor from './components/WhatWeStandFor';
import DiscussionBoard from './components/DiscussionBoard';
import Speaker from './components/Speaker';
import VolunteerSignUp from './components/VolunteerSignUp';
import Donations from './components/Donations';
import Photos from './components/Photos';
import ImportantLinks from './components/ImportantLinks';
import Homepage from './components/HomePage';
import Footer from './components/Footer'; 
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-public-key-here');

const App = () => {
  const links = [
    { path: '/calendar', label: 'Calendar' },
    { path: '/what-we-stand-for', label: 'Who we are' },
    { path: '/newsletter', label: 'Locations' },
    { path: '/discussion-board', label: 'About Us' },
    { path: '/donations', label: 'Donate' } // Update path to /donations
  ];

  return (
    <Router>
      <Elements stripe={stripePromise}>
        <Navbar links={links} />
        <div className="main-content">
          <Routes>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/what-we-stand-for" element={<WhatWeStandFor />} />
            <Route path="/discussion-board" element={<DiscussionBoard />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="/volunteer" element={<VolunteerSignUp />} />
            <Route path="/donations" element={<Donations />} /> {/* Ensure this path matches */}
            <Route path="/photos" element={<Photos />} />
            <Route path="/important-links" element={<ImportantLinks />} />
            <Route path="/" element={<Homepage />} /> {/* Set the homepage as the default route */}
          </Routes>
        </div>
        <Footer />
      </Elements>
    </Router>
  );
};

export default App;
