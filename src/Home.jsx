import React from 'react';
import { useCart } from './CartContext';

const foodData = [
  { name: 'Burger', price: 100, image: 'https://source.unsplash.com/100x100/?burger' },
  { name: 'Pizza', price: 200, image: 'https://source.unsplash.com/100x100/?pizza' }
];

const Home = () => {
  const { addToCart } = useCart();

  const handleAdd = (item) => {
    const itemWithQuantity = {
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    };
    addToCart(itemWithQuantity);
  };

  return (
    <div className="home">
      <h2>Menu</h2>
      <div className="food-items">
        {foodData.map((item, index) => (
          <div className="food-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => handleAdd(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
