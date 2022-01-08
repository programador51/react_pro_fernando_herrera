import React from 'react';
import { ProductContext } from '../pages/ProductCard';
import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';

export interface PropsProductTitle {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({
  title,
  className = '',
  style = {},
}: PropsProductTitle) => {
  const { product } = useContext(ProductContext);

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
