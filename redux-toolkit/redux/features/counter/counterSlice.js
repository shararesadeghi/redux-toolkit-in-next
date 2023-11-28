import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increamentByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, increamentByAmount } =
  counterSlice.actions;

  export const selectCounter = store =>store.counter.counter;
