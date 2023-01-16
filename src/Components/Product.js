import React, { useState } from "react";
import Button from '@mui/material/Button';

const Product = ({ product, addToCart }) => {
  const [ cartAmount, setAmount ] = useState(null);

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
        <input type="number" min={0} onChange={(e) => setAmount(e.target.value)}></input>
        <Button style={{backgroundColor: "black", width: 132}}variant="contained" value={product.id} onClick={onSubmit}>Add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
