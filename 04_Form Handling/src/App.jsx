import React from "react";

const App = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
    alert("Form Submitted!");
  };

  return (
    <div>
      <h1>Learning Form Handling</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
