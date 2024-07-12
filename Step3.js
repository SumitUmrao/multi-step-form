// src/components/Step3.js
import React from 'react';

const Step3 = ({ formData }) => {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Address 1: {formData.address1}</p>
      <p>Address 2: {formData.address2}</p>
      <p>City: {formData.city}</p>
      <p>State: {formData.state}</p>
      <p>Zip Code: {formData.zip}</p>
    </div>
  );
};

export default Step3;
