// src/components/Step2.js
import React from 'react';

const Step2 = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <label>
        Address Line 1:
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />
      </label>
      <label>
        Address Line 2:
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </label>
      <label>
        State:
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
      </label>
      <label>
        Zip Code:
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
      </label>
    </div>
  );
};

export default Step2;
