import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(10);
  const [username, setusername] = useState("amal");
  const [users, setusers] = useState([10, 20, 30, 40]);

  function handleClick() {
    setnum(20);
    setusername("john");
    setusers([110, 120, 130, 140]);
  }

  return (
    <div>
      <h1>Learning useState</h1>
      <h2>
        Value of a is {num} <br /> {users} <br /> username is {username}
      </h2>
      <button onClick={handleClick}>Click for change</button>
    </div>
  );
};

export default App;
