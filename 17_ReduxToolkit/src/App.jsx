import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  function handleResetClick() {
    dispatch(reset());
  }

  return (
    <div className="flex flex-col gap-10 items-center w-auto p-10 m-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleIncrementClick}
      >
        +
      </button>
      <p className="text-2xl">Count:{count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDecrementClick}
      >
        -
      </button>
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg"
        type="number"
        value={amount}
        placeholder="EnterAmount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleIncAmountClick}
      >
        Increment By Amount
      </button>

      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
