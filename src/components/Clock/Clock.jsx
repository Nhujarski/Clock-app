import React, { useEffect, useState } from "react";
import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const getTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(getTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className='clock'>
      <div className='clock-face'>
        <p className='clock-display'>{time.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Clock;
