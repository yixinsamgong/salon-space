import React from 'react'

import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <div>
      <NavLink to="/">
              <button class="btn text-dark">
                My Collection
                </button>
      </NavLink>
      <NavLink to="/database" >
            <button class="btn text-dark">
              Database
              </button>
      </NavLink>
      <NavLink to="/form" >
            <button class="btn text-dark"> 
            New Artwork Submission
            </button>
      </NavLink>
      <NavLink to="/about">
              <button class="btn text-dark">
                About
                </button>
      </NavLink>
      </div>
    </nav>
  )
}
export default NavBar