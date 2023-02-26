import styles from "./Key.module.css";
import { useDispatch } from "react-redux";
import { calculatorActions } from "../store/calculator-slice";

const Key = (props) => {
  const dispatch = useDispatch();

  const addItemsHandler = () => {
    dispatch(calculatorActions.getInput(props.name));
  };

  const className = props.className ? `${styles.action}` : `${styles.key}`;
  return (
    <button onClick={addItemsHandler} className={className}>
      {props.name}
    </button>
  );
};

export default Key;
