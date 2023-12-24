import React, { useState } from 'react';
import './styles.css';
import Login from './Login';
import Register from './Register';

const TopBar = ({ onShowProducts, onLogout, cartItems, onAddToCart, onRemoveFromCart }) => {
  const [currentBox, setCurrentBox] = useState(null);

  const handleToggleLoginRegister = (box) => {
    setCurrentBox(box === currentBox ? null : box);
  };

  const handleToggleCart = () => {
    setCurrentBox(currentBox === 'cart' ? null : 'cart');
  };

  return (
    <div className="top-bar">
      <button onClick={() => handleToggleLoginRegister('login')}>Login</button>
      <button onClick={() => handleToggleLoginRegister('register')}>Register</button>
      <button onClick={handleToggleCart}>Carrinho</button>
      {currentBox && (
        <div className="top-bar-box">
          {currentBox === 'login' && <Login />}
          {currentBox === 'register' && <Register />}
          {currentBox === 'cart' && (
            <div>
              <h2>Carrinho de Compras</h2>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} - R${item.price.toFixed(2)}{' '}
                    <button onClick={() => onRemoveFromCart(item.id)}>Remover</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopBar;