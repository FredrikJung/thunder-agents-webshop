import React from "react";
import UseFetch from "./UseFetch";
import Product from "./Product";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Productlist = ({ addToCart, totalAmount, setTotalAmount }) => {
  const {
    data: products,
    loading,
    error,
  } = UseFetch("https://fakestoreapi.com/products");

  const [category, setCategory] = useState("all");

  return (
    <div>
      <div className="filterBox">
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Categories"
              onChange={(e) => {
                const selectedCategory = e.target.value;
                setCategory(selectedCategory);
              }}
            >
              <MenuItem value="all">All products</MenuItem>
              <MenuItem value="men's clothing">Men's clothing</MenuItem>
              <MenuItem value="women's clothing">Women's clothing</MenuItem>
              <MenuItem value="jewelery">Jewelery</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="products">
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {products
          ?.filter((product) => {
            if (product.category === category) {
              return product;
            } else if (category === "all") {
              return products;
            }
            return false;
          })
          .map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                totalAmount={ totalAmount } 
                setTotalAmount={ setTotalAmount }
              />
            );
          })}
      </div>
    </div>
  );
};

export default Productlist;
