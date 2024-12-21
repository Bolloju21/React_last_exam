import React from 'react';

export const SpinnerHOC = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div className="spinner">Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};
