import React, { useState } from "react";

const Product = ({ product, addToCart }) => {
  const [ cartAmount, setAmount ] = useState("");

  const onSubmit = () => {
    //console.log("adding " + product.title + " to cart ");
    const cart = {
      amount: cartAmount,
      product: product
    }
    addToCart(cart);
  };
  return (
    <div className="product">
      <div className="product-main">
        <img src={product.image} alt="product"></img>
        <b></b>
        <h3>{product.title}</h3>
        <b></b>
        <p>{product.price}$</p>
      </div>
      <div className="product-input">
        <input type="number" onChange={(e) => setAmount(e.target.value)}></input>
        <button value={product.id} onClick={onSubmit}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
