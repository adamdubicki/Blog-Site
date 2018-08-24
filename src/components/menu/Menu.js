import React, { Component } from 'react';

import icon from '../../../assets/adam-icon.jpg';
import MenuIcon from './MenuIcon';

export default class Menu extends Component {
  render() {
    return (
      <aside className="column is-2 is-narrow-mobile is-fullheight menu section is-hidden-mobile section__menu">
        <h1 className="title">{this.props.title}</h1>
        <hr/>
        <img src={icon} alt="Adam Dubicki"/>
        <div className="menu__icon-container">
          <MenuIcon faIcon="fa-github"/>
          <MenuIcon faIcon="fa-linkedin"/>
          <MenuIcon faIcon="fa-at"/>
        </div>
        <hr/>
        <ul className="menu-list">
          <li><a><h2 className="title">About Me</h2></a></li>
          <li><a><h2 className="title">Blog Posts</h2></a></li>
        </ul>
      </aside>
    );
  }
}