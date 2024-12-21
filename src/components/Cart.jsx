import React, { useContext } from 'react';
import { CheckoutContext } from '../context/CheckoutContext';

const Cart = () => {
  const { state, dispatch } = useContext(CheckoutContext);
  
  const removeFromCart = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
