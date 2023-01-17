import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Cart = ({ cart, setTotalAmount, addToCart }) => {
  const onChangeHandler = (amount, productId) => {
    setTotalAmount(parseInt(amount));
    const purchase = {
      amount: parseInt(amount),
      product: {
        id: productId,
      },
    };
    addToCart(purchase);
  };

  return (
    <div>
      <div className="cart">
        {cart.map((cartItem) => {
          return (
            <div key={cartItem.product.id}>
              <div>
                <img src={cartItem.product.image} alt="product"></img>
                <b></b>
                <h3>{cartItem.product.title}</h3>
                <b></b>
                <p>{cartItem.product.price}$</p>
              </div>
              <div className="product-input">
                <input
                  type="number"
                  min={0}
                  value={cartItem.amount}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, cartItem.product.id)
                  }
                ></input>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Link to="/checkout">
          <Button
            style={{ backgroundColor: "black", width: 132 }}
            variant="contained"
          >
            Proceed to checkout
          </Button>
        </Link>
        <Link to="/">
          <Button
            style={{ backgroundColor: "black", width: 132 }}
            variant="contained"
          >
            Back to shop
          </Button>
        </Link>
      </div>
    </div>
  );
};
