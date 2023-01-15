import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"
import TAgents from './images/TAgents.webp'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to="/"> Shop </Link>
           <div> <img className="thunderAgents" src={TAgents} alt="Thunder Agents" /></div>
            <Link to="/cart"> Cart
                </Link>
        </div>
    </div>
  )
}
