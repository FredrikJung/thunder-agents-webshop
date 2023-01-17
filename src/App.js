import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { useState } from "react";
import Footer from "./Components/Footer"

function App() {
  const [ cart, setCart ] = useState([]);
  const [ totalAmount, setTotalAmount]  = useState(0);
  let match = false;

  const addToCart = (cartShop) => {
    setTotalAmount(totalAmount + cartShop.amount);
    console.log(totalAmount);
    cart.map((cartItem)=> {
      if (cartItem.product.id === cartShop.product.id) {
        cartItem.amount = cartItem.amount + cartShop.amount;
        match = true;
      }
    })
    if (!match) {
      setCart([...cart, cartShop]);
      match = false;
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar totalAmount={ totalAmount }/>
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
