import styles from "./Keyboard.module.css";
import Key from "./Key";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const actions = ["C", "+", "-", "*", "/", "="];
let i = 0;

const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.num_keys}>
        {nums.map((item) => (
          <Key key={i++} name={item} />
        ))}
      </div>
      <div className={styles.action_keys}>
        {actions.map((item) => (
          <Key key={i++} className="action" name={item} />
        ))}
      </div>
    </div>
  );
};
export default Keyboard;
