// src/pages/BookingPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkIn, checkOut ,rooms} = location.state || {};

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rooms,
    checkIn: checkIn || '',
    checkOut: checkOut || '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      navigate('/confirmation', { state: formData });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Complete Your Booking</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phone}
          required
        />
        
        {/* Editable Check-In Date */}
        <label>Check-In Date:</label>
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
        />
        
        {/* Editable Check-Out Date */}
        <label>Check-Out Date:</label>
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
        />

        <label>Rooms :</label>
        <input
          type="number"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
          required
        />

        <button type="submit" style={buttonStyle}>Confirm Booking</button>
      </form>
    </div>
  );
};

const containerStyle = {
  padding: '20px',
  maxWidth: '400px',
  margin: '0 auto',
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default BookingPage;