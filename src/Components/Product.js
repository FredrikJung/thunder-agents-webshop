import React from "react";


const Product = ({product}) => {

    const addToCart = () => {
        console.log("adding " + product.title + " to cart");
    }
  return <div className="product">
    
    <img src={product.image} alt="product"></img>
    <b></b>
    <h3>{product.title}</h3>
    <b></b>
    <p>{product.price}$</p>
    <input type="number"></input>
    <button onClick={addToCart}>Add to cart</button>
  </div>;
};

export default Product;
