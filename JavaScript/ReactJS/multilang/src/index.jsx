import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
 

class Item extends Component{
    render(){
        return(
            <>
              <li className="nav-item">
                <p className="nav-link active" aria-current="page" href="#">{this.props.lang}</p>
              </li>
            </>
        )
    }
}
class App extends Component{
    constructor(props){
        super(props);
        this.langAz = this.langAz.bind(this);
        this.langEn = this.langEn.bind(this);
        this.modeOne = this.modeOne.bind(this);
        this.modeTwo = this.modeTwo.bind(this);
        this.state={
            home: "Home",
            about: "About",
            product: "Products",
            contact: "Contact",
            mode:"navbar navbar-expand-lg navbar-dark bg-dark"
        }

    }

    langAz(){
        this.setState({
            home: "Ana Səhifə",
            about: "Haqqımızda",
            product: "Məhsullar",
            contact: "Əlaqə",
        })
    }

    langEn(){
        this.setState({
            home: "Home",
            about: "About",
            product: "Products",
            contact: "Contact",
        })
    }

   
    modeOne(){
        this.setState({
            mode:"navbar navbar-expand-lg navbar-light bg-light"
        })
    }
    modeTwo(){
        this.setState({
            mode:"navbar navbar-expand-lg navbar-dark bg-dark"
        })
    }
    render(){
        return(
            <>
              <nav className={this.state.mode}>
        <div className="container-fluid">
          <p className="navbar-brand" href="#">Logo</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                
        <Item lang={this.state.home}/>
        <Item lang={this.state.about}/>
        <Item lang={this.state.product}/>
        <Item lang={this.state.contact}/>

            
           
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-success me-3" type="button" onClick={this.langAz}>AZ</button>
              <button className="btn btn-outline-success me-3" type="button" onClick={this.langEn}>EN</button>
              <button className="btn btn-outline-success me-3" type="button" onClick={this.state.mode === "navbar navbar-expand-lg navbar-dark bg-dark" ? this.modeOne: this.modeTwo}>Mode</button>
            </div>
          </div>
        </div>
      </nav>
</>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));