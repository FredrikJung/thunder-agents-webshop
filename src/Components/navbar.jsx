import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import TAgents from "./images/TAgents.webp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = ({ totalAmount }) => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <div>
          <img
            className="thunderAgents"
            src={TAgents}
            alt="Thunder Agents"
          />
        </div>
        <div className="cartBox">
          <div className="cartIcon">
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </div>
          <div className="amount">
            <p>( {totalAmount} )</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};
