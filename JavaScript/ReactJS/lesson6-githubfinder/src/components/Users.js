import React, { Component } from 'react';
import User from './User';

export class Users extends Component {
  render() {
    return <div className='container mt-3'>
      <div className='row'>
      {this.props.profile.map(ferid=>(
        <User human = {ferid}/>
      ))}
      </div>
    </div>;
  }
}

export default Users;
