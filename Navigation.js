// src/components/Navigation.js
import React from 'react';

const Navigation = ({ step, handleNext, handleBack }) => {
  return (
    <div>
      {step > 1 && <button onClick={handleBack}>Back</button>}
      {step < 3 && <button onClick={handleNext}>Next</button>}
      {step === 3 && <button type="submit">Submit</button>}
    </div>
  );
};

export default Navigation;
