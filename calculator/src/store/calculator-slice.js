import { createSlice } from "@reduxjs/toolkit";

const calculateEquation = (sign, num1, num2) => {
  if (sign === "+") {
    return num1 + num2;
  } else if (sign === "-") {
    return num1 - num2;
  } else if (sign === "*") {
    return num1 * num2;
  } else if (sign === "/") {
    return num1 / num2;
  }
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    numbers: [],
    signs: [],
    result: 0,
  },
  reducers: {
    getNumber(state, action) {
      state.numbers.push(action.payload);
    },
    getSigns(state, action) {
      state.signs.push(action.payload);
    },
    calculate(state) {
      if (state.numbers.length > 1 && state.result === 0) {
        state.result = calculateEquation(
          state.signs[0],
          state.numbers[0],
          state.numbers[1]
        );

        state.numbers = [];
        state.signs.shift();
      } else if (
        state.signs.length > 0 &&
        state.result !== 0 &&
        state.numbers[0]
      ) {
        state.result = calculateEquation(
          state.signs[0],
          state.result,
          state.numbers[0]
        );

        state.signs.shift();
        state.numbers.pop();
        console.log(state.signs[0]);
      } else if (state.signs.length > 1) {
        state.signs[0] = state.signs.pop();
      }
    },
    equlas(state) {
      if (state.numbers.length > 0) {
        state.result = calculateEquation(
          state.signs[0],
          state.result,
          state.numbers[0]
        );
        state.sings = [];
        state.numbers = [];
      } else {
        state.sings = [];
        state.numbers = [];
      }
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice;
