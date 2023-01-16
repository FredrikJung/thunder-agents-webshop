import React from "react";
import UseFetch from "./UseFetch";
import Product from "./Product";
import {useState} from "react";

const Productlist = () => {
  const {
    data: products,
    loading,
    error,
  } = UseFetch("https://fakestoreapi.com/products");

  const [category, setCategory] = useState("all");

  return (
    <div className="products">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <select name="category" value={category} onChange={(e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
      }}>
        <option value="all">All</option>
        <option value="men's clothing" >Men's clothing</option>
        <option value="jewelery" >Jewelery</option>
        <option value="electronics" >Electronics</option>
        <option value="women's clothing" >Women's clothing</option>
      </select>
      {products?.filter((product) => {
        if(product.category === category){
          return product;
        }
        else if(category === "all"){
          return products;
        }
      }).map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Productlist;
