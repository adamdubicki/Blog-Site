import React, { Component } from 'react';
import Icon from '../Icon';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top is-hidden-web" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="title">{this.props.title}</h1>
          <Icon 
            faIcon="fa-github" 
            onClick={() => window.open('https://github.com/adamdubicki', '_blank')}
          />
          <Icon 
            faIcon="fa-linkedin"
            onClick={() => window.open('https://www.linkedin.com/in/adam-dubicki/', '_blank')}
          />
        </div>
      </nav>
    );
  }
}