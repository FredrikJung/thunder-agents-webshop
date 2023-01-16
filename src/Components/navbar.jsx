import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"
import TAgents from './images/TAgents.webp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to="/"> Shop </Link>
           <div> <img className="thunderAgents" src={TAgents} alt="Thunder Agents" /></div>
            <Link to="/cart"> <ShoppingCartIcon />
                </Link>
        </div>
    </div>
  )
}
