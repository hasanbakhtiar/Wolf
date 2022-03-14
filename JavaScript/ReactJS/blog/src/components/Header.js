import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">BlogApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact activeClassName='active'  aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' to="/blog">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' to="/contact">Contact</NavLink>
          </li>
         
        </ul>
       <div className="d-flex">
         <Link to="/addblog" className='btn btn-secondary'>Add Blog</Link>
       </div>
      </div>
    </div>
  </nav>
  )
}

export default Header