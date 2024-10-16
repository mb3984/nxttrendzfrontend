// src/components/Cart.js
import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import your CSS file for styling

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>No products in your cart. Please shop and add products!</p>
          <Link to="/">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image_url}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{item.title}</h2>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
