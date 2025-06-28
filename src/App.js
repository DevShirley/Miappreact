import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import data from './data/products'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="app-container">
      <header>
        <h1>🏋️‍♂️ Tienda Deportiva</h1>
      </header>
      <div className="product-list">
        {data.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
      <Cart items={cartItems} onRemoveItem={removeFromCart} />
    </div>
  );
}

export default App;
