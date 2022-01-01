import React, { ReactElement, useState } from "react";
import styles from "../styles/styles.module.css";
import useProduct from "02-component-patterns/hooks/useProduct";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductButtonsProps {
  increase: () => void;
  decrease: () => void;
  counter: number;
}

export const ProductImage = ({ img = "" }) => {
  const imageProduct =
    img !== "" ? img : `${process.env.PUBLIC_URL}/images/no-image.jpg`;

  return (
    <img className={styles.productImg} src={imageProduct} alt="product image" />
  );
};

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

export const ProductButtons = ({
  counter,
  increase,
  decrease,
}: ProductButtonsProps) => {
  // const { counter, decrease, increase } = useProduct();

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

export function ProductCard({ product, children }: Props) {
  const { counter, decrease, increase } = useProduct();

  return (
    <div className={styles.productCard}>
      {children}
      {/* <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons
        increase={increase}
        decrease={decrease}
        counter={counter}
      /> */}
    </div>
  );
}
