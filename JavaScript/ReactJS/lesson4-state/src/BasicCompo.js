import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './sass/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Card from './components/Card';

class Card extends Component{
  render(){
    return(
      <div>
          <div className="box">
            <h1>{this.props.basliq}</h1>
            <p>{this.props.metn}</p>
            <i className={this.props.icon}></i>
            <button className='btn btn-primary'>Send</button>
          </div>
      </div>
    )
  }
}

class Box extends Component{
  render(){
    return(
      <div className=' mt-3 d-flex '>
      <Card basliq="Card1" metn="Hello1" icon="fas fa-book"/>
      <Card h1="Card2" p="Hello2" icon="fas fa-search"/>
      <Card />
      <Card />
      </div>
    )
  }
}








class BasicCompo extends Component{
  render(){
    const title ="Title update";
    return(
      <div>
          <Header />
          <div className="d-flex">
          <Card  basliq ={title} metn="metn1"/>
          <Card  basliq ="Title1" metn="metn1"/>
          <Card  basliq ="Title1" metn="metn1"/>
      </div>
      </div>
    )
  }
}





ReactDOM.render(<BasicCompo/>,document.querySelector("#root"));