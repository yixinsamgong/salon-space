import React from 'react'

import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div >
      <NavLink to="/" >
        Home
      </NavLink>
      <NavLink to="/form">
      New Artwork Form
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
    </div>
  )
}
export default NavBar