import React from 'react'

export const Cart = ({ cart, setTotalAmount, addToCart }) => {

  const onChangeHandler = (amount, productId) => {
    setTotalAmount(parseInt(amount));
    const cart = {
      amount: parseInt(amount),
      product: {
        id: productId
      }
    }
    addToCart(cart);
  };

  return (
    <div className='cart'>
      {cart.map(cartItem => {
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
              <input type="number" min={0} value={cartItem.amount} onChange={(e) => onChangeHandler(e.target.value, cartItem.product.id)}></input>
            </div>
          </div>
        )
      })}
    </div>
  )
}
