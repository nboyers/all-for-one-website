import React, { useState } from 'react';

const EmailIntake = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email intake submission
    console.log('Email submitted:', email);
  };

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default EmailIntake;
