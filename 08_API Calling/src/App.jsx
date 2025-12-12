import React from "react";

const App = () => {
  /*
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  */
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default App;
