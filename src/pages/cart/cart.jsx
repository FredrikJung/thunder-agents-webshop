import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Cart = ({
  cart,
  setTotalAmount,
  totalAmount,
  addToCart,
  removeFromCart,
}) => {
  const onChangeHandler = (amount, productId) => {
    if (amount === 0) {
      removeFromCart(productId);
    }
    cart.map((product) => {
      if (amount > product.amount && product.product.id === productId) {
        setTotalAmount(totalAmount + 1);
      } else if (amount < product.amount && product.product.id === productId) {
        setTotalAmount(totalAmount - 1);
      }
      return false;
    });

    const purchase = {
      amount: parseInt(amount),
      product: {
        id: productId,
      },
    };
    addToCart(purchase);
  };

  const totalPrice = cart
    .reduce(
      (price, cartItem) => price + cartItem.amount * cartItem.product.price,
      0
    )
    .toFixed(2);

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
                    <p>${cartItem.product.price}</p>
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
                  <div className="cart-products-price">
                    ${cartItem.amount * cartItem.product.price}
                  </div>
                  <hr></hr>
                </div>
              );
            } return false;
          })}

          <div className="cart-items-total-price-Name">
            <h2>Total price</h2>
            <div className="cart-items-total-price">${totalPrice}</div>
          </div>
          <div className="cart-btns">
            <Link className="checkout-btn" to="/checkout">
              <Button
                style={{ backgroundColor: "black", width: 215 }}
                variant="contained"
              >
                Proceed to checkout
              </Button>
            </Link>
            <Link className="back-to-shop-btn" to="/">
              <Button
                style={{ backgroundColor: "black", width: 142 }}
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
