import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useCart } from 'react-use-cart'
const Nav = () => {
    const {totalItems} = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
         
        
         
        </ul>
        <div className="d-flex">
          <NavLink className="btn btn-outline-success" to="/cart">Cart({totalItems})</NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav