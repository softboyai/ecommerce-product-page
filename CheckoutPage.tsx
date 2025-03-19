import React from "react";
import './CheckoutPage.css'; // Import the CSS file

const CheckoutPage = ({ cart }: { cart: any[] }) => {
  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>
      {cart.length === 0 ? (
        <p className="checkout-empty">Your cart is empty.</p>
      ) : (
        <ul className="checkout-list">
          {cart.map((item: any, index: number) => (
            <li key={index} className="checkout-item">
              <span className="checkout-item-name">{item.name} - {item.price} RWF</span>
            </li>
          ))}
        </ul>
      )}
      <button className="place-order-button">Place Order</button>
    </div>
  );
};

export default CheckoutPage;
