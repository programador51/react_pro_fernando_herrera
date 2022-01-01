import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import styles, { productCard } from "../styles/styles.module.css";
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

interface ProductContextProps {
  counter: number;
  decrease: () => void;
  increase: () => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imgToDisplay: string;

  if (img !== "") {
    imgToDisplay = img;
  } else if (product.img) {
    imgToDisplay = product.img;
  } else {
    imgToDisplay = `${process.env.PUBLIC_URL}/images/no-image.jpg`;
  }

  return (
    <img className={styles.productImg} src={imgToDisplay} alt="product image" />
  );
};

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};

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

export function ProductCard({ product, children }: Props) {
  const { counter, decrease, increase } = useProduct();

  return (
    <Provider
      value={{
        counter,
        decrease,
        increase,
        product,
      }}
    >
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
    </Provider>
  );
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
