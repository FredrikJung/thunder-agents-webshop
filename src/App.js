import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { useState } from "react";
import Footer from "./Components/Footer"

function App() {
  const [ cart, setCart ] = useState([]);

  const addToCart = (cartShop) => {
    const id = cartShop.product.id;
    console.log(id);
    cart.map(cartItem => {
      if ( cartItem.id === id ) {
        cartItem.amount += cartShop.amount;
      }
    })
    const newCart = [...cart, cartShop]
    setCart(newCart);
  }
  //console.log(cart);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop addToCart={ addToCart }/>} />
          <Route path="/cart" element={<Cart cart={ cart }/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
