import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a target="blank" className="navbar-brand" href={this.props.url}><i class={this.props.icon}></i>  {this.props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
     
        </div>
      </nav>
    </div>;
  }
}

export default Nav;
