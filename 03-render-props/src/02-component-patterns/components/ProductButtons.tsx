import { ProductContext } from "02-component-patterns/pages/ProductCard";
import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
  const { increase, decrease, counter, maxCount } = useContext(ProductContext);

  const isMaxReach = useCallback(
    () => (!!maxCount && counter === maxCount ? true : false),
    [counter, maxCount]
  );

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={decrease} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={increase}
        className={`${styles.buttonAdd} ${
          isMaxReach() ? styles.disabled : "null"
        }`}
      >
        +
      </button>
    </div>
  );
};
