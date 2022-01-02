import React from "react";
import { ProductCard } from "02-component-patterns/pages/ProductCard";

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
          <ProductCard.Image imageProp={product.img} />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
}
