import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
            <input type="text" />
          <NavLink to="/searchBoxButton" activeClassName="active">
          Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/Categories" activeClassName="active">
          Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/SignIn" activeClassName="active">
            SignIn
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar