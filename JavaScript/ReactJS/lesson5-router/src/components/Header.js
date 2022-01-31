import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../sass/style.css';


export class Header extends Component {
  render() {
    return  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " activeClassName="active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" target="blank"  activeClassName="active" aria-current="page" to="/contact">Contact</Link>
          </li>
        
        
        </ul>
      
      </div>
    </div>
  </nav>;
  }
}

export default Header;
