import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout Page</h2>
      <form className="payment-form">
        <label>Card Number</label>
        <input type="text" placeholder="1234 5678 9012 3456" />

        <label>Cardholder Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Expiry Date</label>
        <input type="text" placeholder="MM/YY" />

        <label>CVV</label>
        <input type="password" placeholder="123" />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
