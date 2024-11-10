// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import OrderConfirmation from './components/OrderConfirmation';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App
