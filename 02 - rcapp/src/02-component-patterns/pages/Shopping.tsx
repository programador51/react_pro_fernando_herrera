import React from "react";
import { ProductCard } from "02-component-patterns/pages/ProductCard";
import { ProductImage } from "02-component-patterns/components/ProductImage";
import { ProductTitle } from "02-component-patterns/components/ProductTitle";
import { ProductButtons } from "02-component-patterns/components/ProductButtons";
import "../styles/custom-styles.css";

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

        <ProductCard product={product} className="bg-dark">
          <ProductImage imageProp="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FWxfmULzzKoU%2Fmaxresdefault.jpg&f=1&nofb=1" />
          <ProductTitle title="Vacations" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}
