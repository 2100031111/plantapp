// src/components/ProductListingPage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const plants = [
    { id: 1, name: 'Plant 1', price: 10, image: '/images/plant1.jpg' },
    { id: 2, name: 'Plant 2', price: 20, image: '/images/plant2.jpg' },
    { id: 3, name: 'Plant 3', price: 30, image: '/images/plant3.jpg' }
  ];

  return (
    <div className="product-listing">
      <h2>Product Listing</h2>
      <div className="product-cards">
        {plants.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} className="product-image" />
            <div className="product-info">
              <h3>{plant.name}</h3>
              <p className="product-price">${plant.price}</p>
              <button 
                onClick={() => dispatch(addItem(plant))} 
                className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
