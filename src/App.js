import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { useState } from "react";
import Footer from "./Components/Footer";
import { Checkout } from "./pages/checkout/checkout";
import { OrderPlaced } from "./pages/orderPlaced/orderPlaced";

function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  let match = false;

  const addToCart = (cartShop) => {
    cart.map((cartItem) => {
      if (cartItem.product.id === cartShop.product.id) {
        cartItem.amount = cartShop.amount;
        match = true;
      }
      return false;
    });
    if (!match) {
      setCart([...cart, cartShop]);
      match = false;
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem.product.id !== productId));
  };
  const removeAllFromCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem.product.id === productId));
    setTotalAmount(0);
  };

  return (
    <div className="App">
      <Router>
        <Navbar totalAmount={totalAmount} />
        <Routes>
          <Route
            path="/"
            element={
              <Shop
                addToCart={addToCart}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
                cart={cart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setTotalAmount={setTotalAmount}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                totalAmount={totalAmount}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout removeAllFromCart={removeAllFromCart} />}
          />
          <Route path="/orderPlaced" element={<OrderPlaced />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
