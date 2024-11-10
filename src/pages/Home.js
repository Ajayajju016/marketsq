// src/pages/Home.js
import React, { useState } from 'react';
import Discover from '../components/Discover';
import Services from '../components/Services';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms,setrooms] = useState(1)

  // Function to handle the booking action
  const handleBookNow = () => {
    if (checkIn && checkOut && rooms) {
      // Navigate to booking page with state
      navigate('/book', { state: { checkIn, checkOut ,rooms} });
    } else {
      alert('Please select both check-in and check-out dates');
    }
  };

  return (
    
    <div style={containerStyle}>
        <div>
            <p>work from ladakh</p>
            <img src='' alt='Img'/>
        </div>
        
        
      <div style={formStyle}>
        <div>
            <p>Check In</p>
            <input
                className='input'
                name="checkIn"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
        />
        </div>
        <div>
            <p>Check Out</p>
            <input
            className='input'
                name="checkOut"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
            />
        </div>

        <div>
            <p>Rooms</p>
            <p><span className='round' onClick={(e) => setrooms(prevValue => prevValue-1)}>-</span>{rooms}<span className='round' onClick={(e) => setrooms(prevValue => prevValue+1)}>+</span></p>
        </div>
        {/* <input
          name="rooms"
          type="number"
          value={rooms}
          onChange={(e) => setrooms(e.target.value)}
          required
        /> */}
        <button onClick={handleBookNow} style={buttonStyle}>
          Book Now
        </button>
      </div>
      <Discover />
      <Services />
    </div>
  );
};

// Styling for the form container
const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const formStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Home
