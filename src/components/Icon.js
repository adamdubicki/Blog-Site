import React, { Component } from 'react';

class Icon extends Component {

  render() {
    return (
      <i 
        className={"icon fa fa-2x " + this.props.faIcon}
        onClick={() => this.props.onClick()}  
      >
      </i>
    );
  }
}

export default Icon;