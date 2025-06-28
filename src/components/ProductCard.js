import React from 'react';
import './ProductCar.css';

function ProductCard({ image, name, price, description, onAddToCart }) {
  return (
    <div className="product-card-modern">
      <img src={image} alt={name} className="product-img-modern" />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
      <button onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;

