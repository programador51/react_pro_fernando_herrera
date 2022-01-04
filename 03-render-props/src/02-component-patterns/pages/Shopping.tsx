import React from "react";
import { ProductCard } from "02-component-patterns/pages/ProductCard";
import "../styles/custom-styles.css";

const product1 = {
  id: "1",
  title: `Taza Dev`,
  img: `${process.env.PUBLIC_URL}/images/coffee-mug.png`,
};

const product2 = {
  id: "2",
  title: `Taza Dev Plus`,
  img: `${process.env.PUBLIC_URL}/images/coffee-mug.png`,
};

export default function Shopping() {
  return (
    <div>
      <h1>Shopping page </h1>
      <hr />

      <ProductCard
        key={product1.id}
        product={product1}
        initialValues={{ quantity: 4, maxQuantity: 10 }}
      >
        {(message) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
            {message}
          </>
        )}
      </ProductCard>
    </div>
  );
}
