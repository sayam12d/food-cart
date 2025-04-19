import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="details">
                <h4>{item.name}</h4>
                <p>₹{item.price} x {item.quantity}</p>
                <div className="qty-controls">
                  <button onClick={() => decrementQuantity(index)}>-</button>
                  <button onClick={() => incrementQuantity(index)}>+</button>
                  <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
