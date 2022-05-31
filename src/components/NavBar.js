import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <NavLink to="/" classname="nav">
        Home
      </NavLink>
      <NavLink to="/about" classname="nav">
        About
      </NavLink>
    </div>
  )
}
export default NavBar