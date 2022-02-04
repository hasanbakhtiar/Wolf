import axios from 'axios';
import React,{Component}  from 'react';
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Nav from './components/Nav';
import Search from './components/Search';
import Users from './components/Users';

class App extends Component{
  constructor(props){
    super(props);
    this.axtar = this.axtar.bind(this);
    this.state={
      users: []
    }

  }
  axtar(keyword){
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>this.setState({users:res.data.items}))
  }
  render(){
    return(
      <div>
        <Nav title="Github" url="https://github.com" icon="fab fa-github"/>
        <Search searchUsers = {this.axtar}/>
        <Users profile = {this.state.users} />
        </div>
    )
  }
}




ReactDOM.render(<App />, document.querySelector("#root"));