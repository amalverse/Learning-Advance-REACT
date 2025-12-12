import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=21`
      );
      setUserData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  let ShowUserData = (
    <h1 className="text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      Loading...
    </h1>
  );

  if (userData.length > 0) {
    ShowUserData = userData.map((user) => (
      <div key={user.id}>
        <Card user={user} />
      </div>
    ));
  }

  return (
    <div className="bg-black h-screen text-white p-4 relative">
      <div className="flex flex-wrap gap-4 pb-24 overflow-auto h-full">
        {ShowUserData}
      </div>
      <div className="flex justify-center items-center gap-6 p-4 m-2 absolute bottom-0 left-0 right-0 bg-black">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]); // Clear data to show loading state
            }
          }}
          className="bg-amber-400 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95"
        >
          ⬅️Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setUserData([]); // Clear data to show loading state
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95"
        >
          Next➡️
        </button>
      </div>
    </div>
  );
};

export default App;
