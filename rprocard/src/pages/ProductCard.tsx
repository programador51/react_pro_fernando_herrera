import React, { createContext } from 'react';
import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/products.interfaces';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export function ProductCard({
  product,
  children,
  className = '',
  onChange = () => {},
  value = 0,
  initialValues,
}: Props) {
  const {
    counter,
    decrease,
    increase,
    maxCount,
    reset,
    isMaxQuantityReached,
  } = useProduct({
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
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>
        {children({
          quantity: counter,
          isMaxQuantityReached,
          maxQuantity: initialValues?.maxQuantity,
          product,
          increase,
          decrease,
          reset,
        })}
      </div>
    </Provider>
  );
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
