import React, { useEffect } from "react";

function Product(props) {
  useEffect(() => {
    document.title = `Voted ${props.product.votes} time for ${props.product.name}`;
  }, [props.product.votes]);
  return (
    <li>
      <button className="minus" onClick={() => props.onVote("-", props.index)}>
        -
      </button>
      <span>{props.product.name}</span>
      <button className="plus" onClick={() => props.onVote("+", props.index)}>
        +
      </button>
      <span>Votes: {props.product.votes}</span>
    </li>
  );
}

export default Product;
