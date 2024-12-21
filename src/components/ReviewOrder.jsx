import React, { useContext } from 'react';
import { CheckoutContext } from '../context/CheckoutContext';

const ReviewOrder = ({ prevStep }) => {
  const { state } = useContext(CheckoutContext);
  
  return (
    <div>
      <h3>Review Your Order</h3>
      <div>
        <h4>Address: {state.address}</h4>
        <h4>Payment: {state.payment}</h4>
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="button">Submit Order</button>
    </div>
  );
};

export default ReviewOrder;
