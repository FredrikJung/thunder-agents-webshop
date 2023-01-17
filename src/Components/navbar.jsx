import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"
import TAgents from './images/TAgents.webp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = ({ totalAmount }) => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to="/"> Shop </Link>
           <div> <img className="thunderAgents" src={TAgents} alt="Thunder Agents" /> <p className='Amount'>( {totalAmount} )</p> </div>
            <Link to="/cart"> <ShoppingCartIcon /> 
                </Link>
        </div>
    </div>
  )
}
