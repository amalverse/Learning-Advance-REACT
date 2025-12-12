import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;

// Reducers are functions that take the current state and an action, and return a new state.
// The state is updated based on the action type and the payload of the action.
// The action type is a string that represents the type of action that is being performed, and the payload is the data that is being passed to the reducer.
