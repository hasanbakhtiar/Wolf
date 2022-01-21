import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';


class Dropdown extends Component{
    render(){
        return(
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {this.props.brand}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">{this.props.model1}</a></li>
                <li><a className="dropdown-item" href="#">{this.props.model2}</a></li>
              </ul>
            </li>
        )
    }
}


class App extends Component{
    render(){
        const brandName = 'Car Gallery';
        return(
          
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{brandName} </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
      <Dropdown brand="BMW" model1="X5" model2="X10"/>
      <Dropdown brand="Mercedes" model1="margarin S500" model2='tomat pastasi s600'/>
            
       
          </ul>
       
        </div>
      </div>
    </nav>
        )
    }
}



ReactDOM.render(<App/>,document.querySelector("#root"));