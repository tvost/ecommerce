import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Product from './components/Product';
import products from './models/products';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleShowProducts = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('login');
    setToken('');
    setMessage('');
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <TopBar
        onShowProducts={handleShowProducts}
        onLogout={handleLogout}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <div className="main-content">
        <h1>Produtos</h1>
        {currentView === 'dashboard' && (
          <div className="products-container">
            {products.map((product) => (
              <Product key={product.id} {...product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
        {token && (
          <div>
            <h2>Área Protegida</h2>
            <button onClick={handleShowProducts}>Ver Produtos</button>
          </div>
        )}
        <p className={token ? 'success-message' : 'error-message'}>{message}</p>
      </div>
      <Footer companyName="Nome da Empresa" contactInfo="Endereço | Telefone | Email" />
    </div>
  );
}

export default App;