import React, { createContext, useReducer } from 'react';

const initialState = {
  address: '',
  payment: '',
  cart: [],
};

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export const CheckoutContext = createContext();

const CheckoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
