import React, { useState, useContext } from 'react';
import { CheckoutContext } from '../context/CheckoutContext';

const PaymentForm = ({ nextStep, prevStep }) => {
  const { dispatch } = useContext(CheckoutContext);
  const [payment, setPayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_PAYMENT', payload: payment });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Payment Info</h3>
      <input 
        type="text" 
        value={payment}
        onChange={(e) => setPayment(e.target.value)} 
        placeholder="Your payment details" 
      />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default PaymentForm;
