import React from 'react'
import useFetch from "./UseFetch";
import Product from "./Product";

const Productlist = () => {
    const { data: products } = useFetch("https://fakestoreapi.com/products");

    const addToCart = () => {

    }

  return (
    <div>
        {products?.map((product) => {
            return(
            <Product key={product.id} product={product} addToCart={addToCart}/>
            );
        })}
    </div>
  )
}

export default Productlist