// src/components/OrderConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const { state: bookingData } = useLocation();

  return (
    <div style={confirmationStyle}>
      <h2>Order Complete</h2>
      <p>Thank you, {bookingData?.name}, for booking with us!</p>
      <p>Email: {bookingData?.email}</p>
      <p>Phone: {bookingData?.phone}</p>
      <p>Check-In: {bookingData?.checkIn}</p>
      <p>Check-Out: {bookingData?.checkOut}</p>
      <p>Rooms: {bookingData?.rooms}</p>
    </div>
  );
};

const confirmationStyle = {
  padding: '20px',
  maxWidth: '400px',
  margin: '0 auto',
  textAlign: 'center',
};

export default OrderConfirmation;