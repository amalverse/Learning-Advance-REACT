import React, { useState, useEffect, useRef } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  let val = useRef(0); //It run only once - it doesn't run on every render
  let btnRef = useRef();
  function handleIncrement() {
    val.current = val.current + 1;
    console.log(val.current);
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  //It run on every render
  useEffect(() => {
    console.log("rendered again.....");
  });

  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <button onClick={changeColor}>Change Color of button 1 </button>
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <span>{count}</span>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
