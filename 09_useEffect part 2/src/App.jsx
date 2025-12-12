import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  function aChanging() {
    console.log("a is changing");
  }

  function bChanging() {
    console.log("b is changing");
  }

  // useEffect(
  //   function () {
  //     aChanging();
  //     console.log("useEffect is running...");
  //   },
  //   [a]
  // );

  useEffect(
    function () {
      bChanging();
      console.log("useEffect is running...");
    },
    [b]
  );

  return (
    <div>
      <h1> A is {a}</h1>
      <h1> B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
