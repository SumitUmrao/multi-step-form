// src/components/Step1.js
import React from 'react';

const Step1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
    </div>
  );
};

export default Step1;
