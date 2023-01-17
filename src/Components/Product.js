import React, { useState } from "react";
import Button from '@mui/material/Button';

const Product = ({ product, addToCart, totalAmount, setTotalAmount }) => {
  const [ productAmount, setProductAmount ] = useState(null);

  const onSubmit = () => {
    setTotalAmount(totalAmount + parseInt(productAmount));
    const cart = {
      amount: parseInt(productAmount),
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
        <input type="number" min={0} onChange={(e) => setProductAmount(e.target.value)} value={productAmount} ></input>
        <Button style={{backgroundColor: "black", width: 132}}variant="contained" value={product.id} onClick={onSubmit}>Add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
