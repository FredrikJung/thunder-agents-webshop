import React from "react";
import UseFetch from "./UseFetch";
import Product from "./Product";

const Productlist = ({ addToCart }) => {
  const {
    data: products,
    loading,
    error,
  } = UseFetch("https://fakestoreapi.com/products");

  return (
    <div className="products">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {products?.map((product) => {
        return <Product key={product.id} product={product} addToCart={addToCart}/>;
      })}
    </div>
  );
};

export default Productlist;
