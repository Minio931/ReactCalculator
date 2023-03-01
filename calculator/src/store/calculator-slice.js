import { createSlice } from "@reduxjs/toolkit";

const calculateEquation = (sign, num1, num2) => {
  if (sign === "+") {
    return num1 + num2;
  } else if (sign === "-") {
    return num1 - num2;
  } else if (sign === "*") {
    return num1 * num2;
  } else if (sign === "/") {
    if (num2 === 0) {
      return num1;
    }
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
        console.log(state.signs[0]);
        state.signs.shift();
        state.numbers.pop();
      } else if (state.signs.length > 1) {
        state.signs[0] = state.signs.pop();
      }
    },
    equlas(state) {
      if (state.result === 0 && state.numbers.length > 1) {
        state.result = state.numbers[1];
      }
      if (state.numbers.length > 0) {
        state.result = calculateEquation(
          state.signs[0],
          state.result,
          state.numbers[0]
        );
        state.signs = [];
        state.numbers = [];
        console.log(state.numbers[0]);
      } else {
        state.signs = [];
        state.numbers = [];
      }
    },
    clear(state) {
      state.numbers = [];
      state.signs = [];
      state.result = 0;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice;
