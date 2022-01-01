import React from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "02-component-patterns/pages/ProductCard";
// import styles from "02-component-patterns/styles/styles.module.css";

const product = {
  id: "1",
  title: `Taza Dev`,
  img: `${process.env.PUBLIC_URL}/images/coffee-mug.png`,
};

export default function Shopping() {
  return (
    <div>
      <h1>Shopping page </h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons
            increase={function (): void {
              throw new Error("Function not implemented.");
            }}
            decrease={function (): void {
              throw new Error("Function not implemented.");
            }}
            counter={0}
          />
        </ProductCard>
      </div>
    </div>
  );
}
