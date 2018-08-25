import React, { Component } from 'react';

import icon from '../../../assets/adam-icon.jpg';
import Icon from '../Icon';
import Link from "gatsby-link"

export default class Menu extends Component {
  render() {
    return (
      <aside className="column is-2 is-narrow-mobile is-fullheight menu section is-hidden-mobile section__menu">
        <h1 className="title">{this.props.title}</h1>
        <hr/>
        <img src={icon} alt="Adam Dubicki"/>
        <div className="menu__icon-container">
          <Icon 
            faIcon="fa-github" 
            onClick={() => window.open('https://github.com/adamdubicki', '_blank')}
          />
          <Icon 
            faIcon="fa-linkedin"
            onClick={() => window.open('https://www.linkedin.com/in/adam-dubicki/', '_blank')}
          />
        </div>
        <hr/>
        <ul className="menu-list">
           <Link
              to="/blog/"
              activeStyle={{
                color: 'red'
              }}
              innerRef={(el) => { this.myLink = el }}
            >
            Blog
          </Link>
          <Link
              to="/foo/"
              activeStyle={{
                color: 'red'
              }}
              innerRef={(el) => { this.myLink = el }}
            >
            About Me
          </Link>
        </ul>
      </aside>
    );
  }
}