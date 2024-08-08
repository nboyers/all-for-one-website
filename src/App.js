import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import WhatWeStandFor from './components/WhatWeStandFor';
import Newsletter from './components/Newsletter'; 
import DiscussionBoard from './components/DiscussionBoard';
import Speaker from './components/Speaker';
import VolunteerSignUp from './components/VolunteerSignUp';
import DonationShop from './components/DonationShop';
import Photos from './components/Photos';
import ImportantLinks from './components/ImportantLinks';
import Homepage from './components/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/what-we-stand-for" element={<WhatWeStandFor />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/discussion-board" element={<DiscussionBoard />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/volunteer" element={<VolunteerSignUp />} />
          <Route path="/donate-shop" element={<DonationShop />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/important-links" element={<ImportantLinks />} />
          <Route path="/" element={<Homepage />} /> {/* Set the homepage as the default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
