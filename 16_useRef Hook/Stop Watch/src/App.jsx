import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function Reset() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>Stop Watch: {time} Seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default App;
