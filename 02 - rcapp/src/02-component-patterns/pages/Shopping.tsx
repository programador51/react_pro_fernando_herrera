import React from "react";
import ProductCard from "02-component-patterns/pages/ProductCard";
// import styles from "02-component-patterns/styles/styles.module.css";

const product = {};

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
        <ProductCard
          product={{
            id: "1",
            title: "123",
            // img: "12312",
          }}
        />
        {/* <ProductCard /> */}
        {/* <ProductCard /> */}
        {/* <ProductCard /> */}
        {/* <ProductCard /> */}
      </div>
    </div>
  );
}
