import React, { useState } from "react";
import { ProductCard } from "02-component-patterns/pages/ProductCard";
import {
  onChangeArgs,
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
    // "1": { ...product1, quantity: 0 },
    // "2": { ...product2, quantity: 0 },
  });

  const onEditItem = (info: onChangeArgs) => {
    if (info.quantity <= 0) {
      const unreferencedCopy = JSON.parse(JSON.stringify(shoppingCart));

      delete unreferencedCopy[info.product.id];

      setShoppingCart(unreferencedCopy);
      return;
    }

    setShoppingCart((oldItem) => ({
      ...oldItem,
      [info.product.id]: {
        ...info.product,
        quantity: info.quantity,
      },
    }));
  };

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
          <ProductCard key={product.id} product={product} onChange={onEditItem}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.keys(shoppingCart).map((idItem) => (
          <ProductCard
            key={`shoppingCartItem-${idItem}`}
            product={shoppingCart[idItem]}
            className="shopping-card-current"
          >
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>

      <div>{JSON.stringify(shoppingCart, null, 5)}</div>
    </div>
  );
}
