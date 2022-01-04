import { ProductContext } from "02-component-patterns/pages/ProductCard";
import { useContext } from "react";
import styles from "../styles/styles.module.css";

export interface Props {
  imageProp?: string;
  className?: string;
}

export const ProductImage = ({ imageProp = "", className = "" }: Props) => {
  const { product } = useContext(ProductContext);

  let imgToDisplay: string;

  if (imageProp !== "") {
    imgToDisplay = imageProp;
  } else if (product.img) {
    imgToDisplay = product.img;
  } else {
    imgToDisplay = `${process.env.PUBLIC_URL}/images/no-image.jpg`;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToDisplay}
      alt="product image"
    />
  );
};
