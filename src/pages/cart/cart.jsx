import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Cart = ({ cart, setTotalAmount, totalAmount, addToCart }) => {
  const onChangeHandler = (amount, productId) => {
    cart.map((product) => {
      console.log(
        "Amount:  " +
          amount +
          "product.amount:  " +
          product.amount +
          "ProductId:  " +
          product.product.id
      );
      if (amount > product.amount && product.product.id === productId) {
        setTotalAmount(totalAmount + 1);
      } else if (amount < product.amount && product.product.id === productId) {
        setTotalAmount(totalAmount - 1);
      }
    });

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
      {totalAmount > 0 ? (
        <div className="cart">
          {cart.map((cartItem) => {
            if (cartItem.amount > 0) {
              return (
                <div className="cart-product" key={cartItem.product.id}>
                  <div>
                    <img src={cartItem.product.image} alt="product"></img>
                    <b></b>
                    <h3>{cartItem.product.title}</h3>
                    <b></b>
                    <p>{cartItem.product.price}$</p>
                  </div>
                  <div>
                    <input
                      type="number"
                      min={0}
                      value={cartItem.amount}
                      onChange={(e) =>
                        onChangeHandler(e.target.value, cartItem.product.id)
                      }
                    ></input>
                  </div>
                  <hr></hr>
                </div>
              );
            }
          })}
          <div className="cart-btns">
            <Link className="checkout-btn" to="/checkout">
              <Button
                style={{ backgroundColor: "black", width: 132 }}
                variant="contained"
              >
                Proceed to checkout
              </Button>
            </Link>
            <Link className="back-to-shop-btn" to="/">
              <Button
                style={{ backgroundColor: "black", width: 132 }}
                variant="contained"
              >
                Back to shop
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <h1 className="cart">Your Cart is Empty</h1>
      )}
    </div>
  );
};
