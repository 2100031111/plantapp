// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCartPage from './components/ShoppingCartPage';
import ProductListingPage from './components/ProductListingPage'; // Make sure this component exists
import Header from './components/Header'; // Make sure this component exists
import './App.css';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/products" element={<ProductListingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
