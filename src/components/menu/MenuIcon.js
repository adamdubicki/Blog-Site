import React, { Component } from 'react';

class MenuIcon extends Component {
  render() {
    return (
      <i className className={"menu__icon fa fa-2x " + this.props.faIcon}></i>
    );
  }
}

export default MenuIcon;