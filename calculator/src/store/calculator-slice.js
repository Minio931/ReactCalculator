import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    items: [],
    numbers: [],
    signs: [],
    result: 0,
  },
  reducers: {
    getInput(state, action) {
      state.items.push(action.payload);
    },
    calculate() {},
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice;
