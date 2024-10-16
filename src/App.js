// src/App.js
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Register from "./components/Register";
import Products from "./components/Products";

import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  // Function to add product to cart
  const addToCart = (product) => {
    console.log("Product being added to cart:", product); // Check the product details
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Log cart items whenever they change
  useEffect(() => {
    console.log("Cart Items:", cartItems); // Verify cart item
  }, [cartItems]);

  return (
    <>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/products"
          render={() => <Products addToCart={addToCart} />} // Pass addToCart here
        />
        <Route
          exact
          path="/cart"
          render={() => <Cart cartItems={cartItems} />}
        />
      </Switch>
    </>
  );
};

export default App;
