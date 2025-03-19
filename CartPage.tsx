import React from "react";
import Cart from "../components/Cart";
import './CartPage.css'; // Import the CSS file

const CartPage = ({ cart, removeFromCart }: { cart: any[], removeFromCart: (index: number) => void }) => {
  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item: any, index: number) => (
            <li key={index} className="cart-item">
              <span className="cart-item-name">{item.name} - {item.price} RWF</span>
              <button onClick={() => removeFromCart(index)} className="cart-remove-button">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
