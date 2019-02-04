import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  const tick = () => setTime(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div>{time.toLocaleString()}</div>;
}

export default Clock;
