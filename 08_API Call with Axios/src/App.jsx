import React, { useState } from "react";
import axios from "axios";

const App = () => {
  /*
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  */

  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("Data fetched successfully:", response.data);
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (item) {
          return (
            <div key={item.id}>
              <h3 style={{ color: "red" }}>
                {item.id} - {item.title}
              </h3>
              <p>{item.body}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
