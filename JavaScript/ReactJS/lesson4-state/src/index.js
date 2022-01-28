import { render } from '@testing-library/react';
import React,{Component}  from 'react';
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import img1 from './img/bookimg1.jfif';
import img2 from './img/bookimg2.jpg';


class App extends Component{
  constructor(props){
      super(props);
      this.nextPage = this.nextPage.bind(this);
      this.state={
        img: img1,
        bookname : "Sefiller",
        auth: "Viktor ",
        pageLenght: 1000
      }
  }


nextPage(){
  this.setState({
    img: img2,
    bookname : "1984",
    auth: "George Orwell",
    pageLenght: 300
  })
}
  
  render(){
    return(
      <div>
        <div className='container mt-3'>
          <img src={this.state.img} width="200" alt="" />
          <h1>{this.state.bookname}</h1>
          <p>{this.state.auth}</p>
          <p>{this.state.pageLenght}</p>
          <button onClick={this.nextPage} className='btn btn-primary '>Next Book</button>
        </div>
        <hr />
      </div>
      
    )
  }
}



class Counter extends Component {
constructor(props){
  super(props);
  this.addCount = this.addCount.bind(this);
  this.clearCount = this.clearCount.bind(this);
  this.reset = this.reset.bind(this);
  this.state={
    count:0
  }
}

clearCount(){
  if (this.state.count > 0) {
    this.setState({
      count: this.state.count - 1
    })
  }
}

addCount(){
  this.setState({
    count: this.state.count + 1
  })
}

reset(){
  this.setState({
    count: 0
  })
}

  render(){
    return(
<div className='container'>
  <h1>U clicked : {this.state.count}</h1>
      <button onClick={this.clearCount} className='btn btn-danger'>-1</button>
      <button onClick={this.addCount} className='btn btn-success ms-1'>+1</button>
      <button onClick={this.reset} className='btn btn-warning ms-1'>reset</button>

</div>
    )
  }
}


ReactDOM.render(<Counter />, document.querySelector("#root"));