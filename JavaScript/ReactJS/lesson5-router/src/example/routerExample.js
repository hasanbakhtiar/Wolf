import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom';
// import App from './App';


class Header extends Component{
    render(){
        return(
            <header>
                <nav>
                    <ul className='d-flex'>
                        <div className='ms-3'><Link to="/">Home</Link></div>
                        <div className='ms-3'><Link to="/about">About</Link></div>
                        <div className='ms-3'><Link to="/contact">Contact</Link></div>
                    </ul>
                </nav>
            </header>
        )
    }
} 

class Home extends Component{
    render(){
        return(
           <h1>Home</h1>
        )
    }
} 

class About extends Component{
    render(){
        return(
           <h1>About</h1>
        )
    }
} 

class Contact extends Component{
    render(){
        return(
           <h1>
               Contact
           </h1>
        )
    }
} 

class NotFound extends Component{
    render(){
        return(
           <h1>
               404 Not found
               <p>Bele bir sehife yoxdur</p>
           </h1>
        )
    }
} 

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Header />
                <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));