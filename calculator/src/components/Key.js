import styles from "./Key.module.css";

const Key = (props) => {
  const addItemsHandler = () => {
    props.onChange(props.name);
  };

  const className = props.className ? `${styles.action}` : `${styles.key}`;
  return (
    <button onClick={addItemsHandler} className={className}>
      {props.name}
    </button>
  );
};

export default Key;
