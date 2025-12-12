import React from "react";

const App = () => {
  // localStorage.clear();
  // localStorage.setItem("name", "Rahul");
  // localStorage.setItem("age", "24");

  // const name = localStorage.getItem("name");
  // console.log(name);

  //localStorage.removeItem("name");

  const user = {
    name: "Rahul",
    age: 24,
    address: {
      city: "New York",
      country: "USA",
    },
  };
  localStorage.setItem("user", JSON.stringify(user));

  const storedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(storedUser);
  console.log(parsedUser);

  return <div>App</div>;
};

export default App;
