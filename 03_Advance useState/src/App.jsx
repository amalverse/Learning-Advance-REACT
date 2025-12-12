import React, { useState } from "react";

const App = () => {
  // const [num, setnum] = useState({ user: "Ankit", age: 24 });
  // const handleClick = () => {
  //   const newNum = { ...num }; // Create a shallow copy of the num object
  //   newNum.age = 25;
  //   newNum.user = "John";
  //   setnum(newNum);
  // };

  // const [num, setnum] = useState([10, 20, 30]);

  // const handleClick = () => {
  //   const newNum = [...num]; // Create a shallow copy of the num array
  //   newNum.push(40);
  //   console.log(newNum);
  //   setnum(newNum);
  // };

  // const [num, setnum] = useState({ user: "Ankit", age: 24 });
  // const handleClick = () => {
  //   setnum((prevNum) => ({ ...prevNum, age: 25, user: "John" }));
  // };

  const [num, setnum] = useState(10);
  const handleClick = () => {
    setnum((prevNum) => prevNum + 1);
    setnum((prevNum) => prevNum + 1);
    setnum((prevNum) => prevNum + 1); //it will increment by 3. It's called Batch update.
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
