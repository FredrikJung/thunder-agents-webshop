import React from "react";
import useFetch from "./UseFetch";
import Product from "./Product";

const Productlist = () => {
  const { data: products } = useFetch("https://fakestoreapi.com/products");

  return (
    <div className="products">
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Productlist;
