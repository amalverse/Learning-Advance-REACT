import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//Redux Toolkit Steps:
// Step1: Create Store
// Step2: Wrap App Component under Provider in main.jsx.
// Step3: Create Slice
// Step4: Register reducer in store
