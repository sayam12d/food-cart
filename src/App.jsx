import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Checkout from './Checkout';
import { CartProvider } from './CartContext';
import './index.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <nav>
          <h2 style={{ color: 'white' }}>Food Cart</h2>
          <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
