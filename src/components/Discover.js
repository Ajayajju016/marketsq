// src/components/Discover.js
import React from 'react';
import './Discover.css';

const Discover = () => {
  return (
    <section className="discover">
      <h2>Discover</h2>
      <div className="reviews">
        <div className="review">
          <h4>Arjun Raghav</h4>
          <p>Great experience with amazing views. Highly recommend working from Ladakh!</p>
        </div>
        <div className="review">
          <h4>Anand Solanki</h4>
          <p>Perfect place for a workation. The internet was fast, and the scenery was breathtaking.</p>
        </div>
      </div>
    </section>
  );
};

export default Discover;