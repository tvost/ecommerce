// TopBar.js
import React from 'react';

const TopBar = ({ onShowProducts, onLogout, cartItems, onToggleCart }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <button onClick={onShowProducts}>Produtos</button>
      </div>
      <div className="top-bar-right">
        <button onClick={onToggleCart}>Carrinho ({cartItems.length})</button>
        <p>Total: R${calculateTotalPrice()}</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default TopBar;