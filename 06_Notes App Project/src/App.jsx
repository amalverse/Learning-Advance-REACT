import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");

  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]; // Create a copy of the current task array
    copyTask.push({ title, details }); // Add the new note to the copied array
    setTask(copyTask); // Update the state with the new array

    settitle("");
    setdetails("");
  };

  const deleteHandler = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen flex flex-col items-center text-white bg-gray-900">
      <form
        onSubmit={submitHandler}
        className="flex flex-col bg-gray-800 p-5 m-5 gap-5 w-3xl"
      >
        <h1 className="text-3xl text-blue-700 font-bold flex justify-center">
          Add Notes
        </h1>

        {/* Input Title */}

        <input
          className="p-2 border-2 border-white rounded-lg"
          type="text"
          placeholder="Enter your note here"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        {/* Input Details */}

        <textarea
          className="p-2 border-2 border-white rounded-lg"
          name=""
          id=""
          placeholder="Enter Details"
          value={details}
          onChange={(e) => setdetails(e.target.value)}
        ></textarea>

        {/* Submit Button */}

        <button className="bg-blue-700 p-2 rounded-lg hover:bg-blue-900">
          Add Note
        </button>
      </form>

      {/* Your Notes */}

      <div className="w-3xl flex flex-col mb-5">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-6 h-full ">
          {task.map(function (note, index) {
            return (
              <div
                key={index}
                className="h-52 w-40 rounded-xl text-black p-4 bg-white"
              >
                <h2
                  onClick={deleteHandler.bind(this, index)}
                  className="relative top-0 left-25 cursor-pointer"
                >
                  ❌
                </h2>
                <h3 className="leading-tight text-xl font-bold">
                  {note.title}
                </h3>
                <p className="mt-2 leading-tight font-medium">{note.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
