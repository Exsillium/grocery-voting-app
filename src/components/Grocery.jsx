import React, { useState } from "react";
import Product from "./Product";

function Grocery(props) {
  const [products, setProducts] = useState(props.products);
  const onVote = (operation, index) => {
    if (operation === "+") {
      const updatedProducts = [...products];
      updatedProducts[index].votes++;
      setProducts(updatedProducts);
    } else {
      const updatedProducts = [...products];
      updatedProducts[index].votes--;
      setProducts(updatedProducts);
    }
  };
  return (
    <>
      <h1>Grocery Voting App</h1>
      <hr />
      {props.products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <Product
              key={product.name}
              product={product}
              index={index}
              onVote={onVote}
            />
          ))}
        </ul>
      ) : (
        <h2>No groceries yet</h2>
      )}
    </>
  );
}

export default Grocery;
