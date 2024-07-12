// src/components/Form.js
import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Navigation from './Navigation';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
      {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
      {step === 3 && <Step3 formData={formData} />}
      <Navigation step={step} handleNext={handleNext} handleBack={handleBack} />
    </div>
  );
};

export default Form;
