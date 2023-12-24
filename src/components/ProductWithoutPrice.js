// ProductWithoutPrice.js
import React from 'react';

const ProductWithoutPrice = ({ id, name, description }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Preço: **Omitido**</p>
    </div>
  );
};

export default ProductWithoutPrice;