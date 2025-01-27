// src/components/ShoppingCartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, removeItem, clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
              <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </div>
          ))}
          <div>
            <p>Total Price: ${totalPrice}</p>
            <button onClick={() => alert('Coming Soon')}>Checkout</button>
            <Link to="/products"><button>Continue Shopping</button></Link>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
