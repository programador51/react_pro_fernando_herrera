import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import useProduct from "02-component-patterns/hooks/useProduct";

export default function ProductCard() {
  // const [counter, setCounter] = useState(0);

  // const increase = () => setCounter(counter + 1);
  // const decrease = () => setCounter(counter - 1 <= 0 ? 0 : counter - 1);

  const { counter, decrease, increase } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={`${process.env.PUBLIC_URL}/images/coffee-mug.png`}
        alt="mug of the product to sell"
      />
      <span className={styles.productDescription}>Coffee mug</span>

      <div className={styles.buttonsContainer}>
        <button onClick={decrease} className={styles.buttonMinus}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={increase} className={styles.buttonAdd}>
          +
        </button>
      </div>
    </div>
  );
}
