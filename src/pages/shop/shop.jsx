import React from "react";
import useFetch from "../../Components/useFetch";

export const Shop = () => {
  const { data: products } = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      {products?.map((productsItem) => {
        return (
          <div>
            <img src={productsItem.image} alt="product"></img>
            <div key={productsItem.id}>{productsItem.title}</div>
          </div>
        );
      })}
    </div>
  );
};
