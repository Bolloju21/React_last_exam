import React, { useContext } from 'react';
import { CheckoutContext } from '../context/CheckoutContext';

const ProductItem = ({ product }) => {
  const { dispatch } = useContext(CheckoutContext);

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  return (
    <div>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
