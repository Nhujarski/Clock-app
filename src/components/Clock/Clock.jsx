import React, { useEffect, useState } from "react";
import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  let hours = time.getHours();
  let minutes = time.getMinutes();

  const getTime = () => {
    setTime(new Date());
    console.log("time in intervl >>> ", time);
  };
  setInterval(getTime, 60000);

  useEffect(() => {
    hours = time.getHours();
    minutes = time.getMinutes();
  }, [time]);

  return (
    <div className='clock'>
      <div className='clock-face'>
        <p className='clock-display'>
          {hours} : {minutes}
        </p>
      </div>
    </div>
  );
};

export default Clock;
