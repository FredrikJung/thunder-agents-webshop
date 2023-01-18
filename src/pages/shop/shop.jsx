import Productlist from "../../Components/Productlist";

export const Shop = ({ addToCart, totalAmount, setTotalAmount, cart }) => {
  return (
    <div className="container">
      <Productlist
        addToCart={addToCart}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        cart={cart}
      />
    </div>
  );
};
