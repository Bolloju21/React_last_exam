import React, { useState, useContext } from 'react';
import { CheckoutContext } from '../context/CheckoutContext';

const AddressForm = ({ nextStep }) => {
  const { dispatch } = useContext(CheckoutContext);
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_ADDRESS', payload: address });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Address</h3>
      <input 
        type="text" 
        value={address}
        onChange={(e) => setAddress(e.target.value)} 
        placeholder="Your address" 
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default AddressForm;
