 // src/components/Banner.js
import React, { useState, useEffect } from 'react';

const Banner = ({ description, timer, link, visible }) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    if (visible && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [visible, countdown]);

  if (!visible || countdown <= 0) return null;

  return (
    <div className="banner" style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Click Here</a>
      <p>{`Time left: ${countdown} seconds`}</p>
    </div>
  );
};

export default Banner;

