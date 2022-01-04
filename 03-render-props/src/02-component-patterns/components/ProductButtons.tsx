import { ProductContext } from "02-component-patterns/pages/ProductCard";
import { useContext } from "react";
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
  const { increase, decrease, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={decrease} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={increase} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};
