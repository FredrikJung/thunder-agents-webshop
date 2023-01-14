import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
        <div>
            <Link to="/"> Shop </Link>
            <Link to="/cart"> Cart </Link>
        </div>
    </div>
  )
}
