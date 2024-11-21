"use client"
import { useState, useEffect } from 'react';

const Home = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <h1 className="time">{time}</h1>
      </div>
    </div>
  );
};

export default Home;
