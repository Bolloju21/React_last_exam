import React, { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import ReviewOrder from './ReviewOrder';

const Checkout = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      <h2>Checkout</h2>
      {step === 1 && <AddressForm nextStep={nextStep} />}
      {step === 2 && <PaymentForm nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <ReviewOrder prevStep={prevStep} />}
    </div>
  );
};

export default Checkout;
