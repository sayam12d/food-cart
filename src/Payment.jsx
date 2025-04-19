import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert(`Payment successful with ${paymentMethod}`);
    // You can clear the cart here or manage cart state
    navigate('/');
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
      <div className="payment-summary">
        <h3>Items in Cart</h3>
        {cart.map((item, index) => (
          <div className="payment-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="details">
              <h4>{item.name}</h4>
              <p>₹{item.price} x {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="payment-total">
          <h3>Total: ₹{total}</h3>
        </div>
      </div>
      <div className="payment-method">
        <h3>Select Payment Method</h3>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <div className="payment-button">
        <button onClick={handlePayment}>Confirm Payment</button>
      </div>
    </div>
  );
};

export default Payment;
