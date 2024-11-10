// src/components/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = ({ onBookingComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    rooms: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      onBookingComplete(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="checkIn" type="date" onChange={handleChange} required />
      <input name="checkOut" type="date" onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;