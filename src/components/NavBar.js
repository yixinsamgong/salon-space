import React from 'react'

import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <div>
      <NavLink to="/home"  className="btn">
        My Collection
      </NavLink>
      <NavLink to="/database" className="btn">
          Database
      </NavLink>
      <NavLink to="/form" className="btn">
      New Artwork Submission
      </NavLink>
      <NavLink to="/about" className="btn">
        About
      </NavLink>
      </div>
    </nav>
  )
}
export default NavBar