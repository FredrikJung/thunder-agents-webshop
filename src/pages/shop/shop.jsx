import Productlist from "../../Components/Productlist";

export const Shop = ({ addToCart, totalAmount, setTotalAmount }) => {
  return (
    <div className="container">
      <Productlist addToCart={addToCart} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
    </div>
  );
};
