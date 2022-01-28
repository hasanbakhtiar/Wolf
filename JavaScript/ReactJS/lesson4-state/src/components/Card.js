import React, { Component } from 'react';

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
  

export default Card;
