import styles from "./Board.module.css";
import Keyboard from "./Keyboard";
import { useSelector } from "react-redux";

const Board = () => {
  const itemsToDisplay = useSelector((state) => state.calculator.items);
  let display = "";
  itemsToDisplay.map((item) => (display += item));

  return (
    <div className={styles.board}>
      <div className={styles.display}>
        <p>{display}</p>
      </div>
      <Keyboard />
    </div>
  );
};

export default Board;
