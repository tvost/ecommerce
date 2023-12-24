import React from 'react';

const Product = ({ id, name, description, price, image, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(id);
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Preço: R${price.toFixed(2)}</p>
      <button onClick={handleClick}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Product;