import React, { createContext } from "react";
import styles from "../styles/styles.module.css";
import useProduct from "02-component-patterns/hooks/useProduct";
import {
  ProductContextProps,
  Props,
} from "02-component-patterns/interfaces/products.interfaces";
import { ProductImage } from "02-component-patterns/components/ProductImage";
import { ProductTitle } from "02-component-patterns/components/ProductTitle";
import { ProductButtons } from "02-component-patterns/components/ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export function ProductCard({
  product,
  children,
  className = "",
  onChange = () => {},
  value = 0,
  initialValues,
}: Props) {
  const { counter, decrease, increase } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        decrease,
        increase,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>
        {children("hi")}
      </div>
    </Provider>
  );
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
