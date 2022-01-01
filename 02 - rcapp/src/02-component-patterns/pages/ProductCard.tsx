import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import useProduct from "02-component-patterns/hooks/useProduct";

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export default function ProductCard({ product }: Props) {
  const { counter, decrease, increase } = useProduct();

  console.log(product.img);

  const img =
    product.img !== undefined
      ? product.img
      : `${process.env.PUBLIC_URL}/images/no-image.jpg`;

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={img}
        alt="mug of the product to sell"
      />
      <span className={styles.productDescription}>{product.title}</span>

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
