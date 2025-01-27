// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';  // Importing styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Plant Store</h1>
      <p>Explore a variety of beautiful plants for your home.</p>
      <Link to="/products" className="get-started-button">Get Started</Link>
    </div>
  );
};

export default LandingPage;
