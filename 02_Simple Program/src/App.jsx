import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  function handleIncrease() {
    setnum(num + 1);
  }

  function handleDecrease() {
    setnum(num - 1);
  }

  function handleJumpBy5() {
    setnum(num + 5);
  }

  function handleReset() {
    setnum(0);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={handleJumpBy5}>Jump By 5</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
