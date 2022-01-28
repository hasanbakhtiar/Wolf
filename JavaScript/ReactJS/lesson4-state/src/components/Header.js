import React, { Component } from 'react';

class Header extends Component{
    render(){
      return(
        <header>
          <nav className='d-flex align-items-center justify-content-center w-100'>
            <ul className='d-flex align-items-center justify-content-between'>
              <li><a href="#">Test Link</a></li>
              <li><a href="#">Test Link</a></li>
              <li><a href="#">Test Link</a></li>
              <li><a href="#">Test Link</a></li>
              <li><a href="#">Test Link</a></li>
            </ul>
          </nav>
        </header>
      )
    }
  }

export default Header;
