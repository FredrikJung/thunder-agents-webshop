import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  ConstructionOutlined,
  PrecisionManufacturing,
} from "@mui/icons-material";

const Product = ({ product, addToCart, totalAmount, setTotalAmount, cart }) => {
  const [productAmount, setProductAmount] = useState(0);
  let previousAmount = 0;

  useEffect(() => {
    cart.map((cartItem) => {
      if (cartItem.product.id === product.id && cartItem.amount !== 0) {
        setProductAmount(cartItem.amount);
        // previousAmount = cartItem.amount;
        // console.log(cartItem.product.id);
      }
    });
  }, [totalAmount]);

  const onSubmit = () => {
    setTotalAmount(totalAmount + parseInt(productAmount));
    const purchase = {
      amount: parseInt(productAmount),
      product: product,
    };
    addToCart(purchase);
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
        <input
          type="number"
          min={0}
          onChange={(e) => setProductAmount(e.target.value)}
          value={productAmount}
        ></input>
        <Button
          style={{ backgroundColor: "black", width: 132 }}
          variant="contained"
          value={product.id}
          onClick={onSubmit}
        >
          Add to cart ({productAmount})
        </Button>
      </div>
    </div>
  );
};

export default Product;
