import React from "react";
import useFetch from "./UseFetch";
import Product from "./Product";

const Productlist = () => {
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
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Productlist;
