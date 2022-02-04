import React, { Component } from 'react';

export class User extends Component {
  render() {
    const {login,avatar_url,html_url,id} = this.props.human;
    return (
      <div className="card col-3" >
  <img className="card-img-top" src={avatar_url} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{login}</h5>
    <p className="card-text">{id}</p>
    <a href={html_url} target="blank" className="btn btn-primary">Go profile</a>
  </div>
</div>

    );
  }
}

export default User;
