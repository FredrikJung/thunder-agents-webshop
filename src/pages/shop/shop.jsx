import React from "react";
import useFetch from "../../Components/useFetch";

export const Shop = () => {
  const { data: products } = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      {products?.map((productsItem) => {
        return <li key={productsItem.id}>{productsItem.title}</li>;
      })}
    </div>
  );
};
