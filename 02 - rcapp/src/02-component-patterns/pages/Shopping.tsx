import React, { useState } from "react";
import { ProductCard } from "02-component-patterns/pages/ProductCard";
import {
  Product,
  ShoppingItem,
} from "02-component-patterns/interfaces/products.interfaces";
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

const products: Product[] = [product1, product2];

export default function Shopping() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ShoppingItem;
  }>({
    "1": { ...product1, quantity: 10 },
    "2": { ...product2, quantity: 4 },
  });

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
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard product={product1} className="shopping-card-current">
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
}
