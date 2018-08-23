import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top is-hidden-web" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1>{this.props.title}</h1>
          </a>
        </div>
      </nav>
    );
  }
}