import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState(" ");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Form Submitted: ${title}`);
    setTitle(" ");
  };

  return (
    <div>
      <h1>Learning Form Handling</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
