import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tienda</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
