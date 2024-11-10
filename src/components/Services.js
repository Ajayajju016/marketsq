// src/components/Services.js
import React from 'react';
import './Services.css';

const servicesList = [
  'High Speed Internet',
  'Healthy Meals',
  'Homely Stay',
  'Transportation',
  'Food Delivery',
  'Tourism Guide',
];

const Services = () => {
  return (
    <section className="services">
      <h2>Services</h2>
      <ul className="services-list">
        {servicesList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
};

export default Services;