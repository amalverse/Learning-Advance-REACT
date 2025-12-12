import React, { useState, useEffect } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(10);

  useEffect(
    function () {
      console.log("useEffect is running..");
    },
    [num] // Specify the dependency array
  );

  return (
    <div>
      <h1> Value of num is {num}</h1>
      <h1> Value of num2 is {num2}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
        onMouseEnter={() => {
          setnum2(num2 + 10);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
