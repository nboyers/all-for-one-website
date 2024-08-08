import React from 'react';
import './CSS/Newsletter.css';

const Newsletter = () => {
  return (
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
  );
};

export default Newsletter;
