import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ product, addToCart, totalAmount, setTotalAmount, cart }) => {
  const [productAmount, setProductAmount] = useState(null);

  useEffect(() => {
    cart.map((cartItem) => {
      if (cartItem.product.id === product.id && cartItem.amount !== 0) {
        return setProductAmount(cartItem.amount);
      }
      return false;
    });
  }, [cart, product.id]);

  const onSubmit = () => {
    setTotalAmount(totalAmount + 1);
    setProductAmount(productAmount + 1);
    console.log(productAmount);
    const purchase = {
      amount: parseInt(productAmount + 1),
      product: product,
    };
    console.log(purchase);
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
        <Button
          style={{ backgroundColor: "black", width: 110 }}
          variant="contained"
          value={product.id}
          onClick={onSubmit}
        >
          Add
        </Button>
        {productAmount && (
          <div>
            <AddShoppingCartIcon style={{ marginLeft: 5, marginTop: 7 }} /> (
            {productAmount})
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
