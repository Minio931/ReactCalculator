import styles from "./Board.module.css";
import Keyboard from "./Keyboard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { calculatorActions } from "../store/calculator-slice";

let equation = "";

const Board = () => {
  const [display, setDisplay] = useState("");
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch();
  const numbers = useSelector((state) => state.calculator.numbers);
  const result = useSelector((state) => state.calculator.result);
  const sign = useSelector((state) => state.calculator.signs);

  const displayEquation = (item) => {
    setShowResult(false);
    if (item === "+" || item === "-" || item === "/" || item === "*") {
      let numbers = parseFloat(equation);
      if (numbers) {
        dispatch(calculatorActions.getNumber(numbers));
      }

      dispatch(calculatorActions.getSigns(item));
      dispatch(calculatorActions.calculate());
      equation = "";
    } else if (item === "=") {
      setDisplay(null);
      setShowResult(true);
      if (equation !== "") {
        let numbers = parseFloat(equation);
        dispatch(calculatorActions.getNumber(numbers));
      }
      dispatch(calculatorActions.equlas());
    } else {
      equation += item;
      setDisplay(equation);
    }
  };

  const calculates = (
    <div className={styles.display}>
      <p>
        {result ? result : numbers}
        {sign}
      </p>
      <p>{display}</p>
    </div>
  );
  const displayResult = (
    <div className={styles.display}>
      <p>{result}</p>
    </div>
  );
  const displayDiv = showResult ? displayResult : calculates;

  return (
    <div className={styles.board}>
      {displayDiv}
      <Keyboard onChange={displayEquation} />
    </div>
  );
};

export default Board;
