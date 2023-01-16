import Productlist from "../../Components/Productlist";

export const Shop = ({ addToCart }) => {
  return (
    <div className="container">
      <Productlist addToCart={addToCart} />
    </div>
  );
};
