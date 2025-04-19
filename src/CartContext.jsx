import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item, index) => index !== id);
    setCart(updatedCart);
  };

  const incrementQuantity = (index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      } else if (i === index && item.quantity === 1) {
        return null;
      }
      return item;
    }).filter(item => item !== null);

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
