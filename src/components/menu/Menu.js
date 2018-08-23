import React, { Component } from 'react';
import icon from '../../../assets/adam-icon.png';

export default class Menu extends Component {
  render() {
    return (
      <aside className="column is-2 is-narrow-mobile is-fullheight menu section is-hidden-mobile section__menu">
        <h1 className="title">{this.props.title}</h1>


        <div className="card">
          <div className="card-image">
            <figure>
              <img src={icon} alt="Placeholder image" style={{"border-radius": "50%"}}/>
            </figure>
          </div>
        </div>




        <ul className="menu-list">
          <li>
            <a href="#" className="">
              <span className="icon"><i className="fa fa-home"></i></span> Home
            </a>
          </li>
          <li>
            <a href="#" className="is-danger">
              <span className="icon"><i className="fa fa-table"></i></span> Links
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}