import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="main-footer">
            <p>
            &copy;{new Date().getFullYear()} Thunder Agents | All Rights Reserved | Terms Of Service | Privacy
            </p>
    </div>
  )
}

export default Footer