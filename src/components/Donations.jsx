import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CSS/Donations.css';

const Donations = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      // You can handle the successful payment here
    }
  };

  return (
    <div className="donations-container">
      <h2>Donate</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Donation Amount:</label>
        <input type="number" id="amount" name="amount" />
        <label htmlFor="card-element">Credit or debit card:</label>
        <CardElement id="card-element" />
        <button type="submit" disabled={!stripe}>Donate</button>
      </form>
      {paymentError && <div className="error">{paymentError}</div>}
      {paymentSuccess && <div className="success">Payment successful!</div>}
    </div>
  );
};

export default Donations;
