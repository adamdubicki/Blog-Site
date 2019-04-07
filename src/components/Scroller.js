import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Fade from 'react-reveal/Fade';

class Scroller extends Component {

  state = {
    index: 0,
    show: false
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { show, index } = this.state;
      this.setState({ 
        show: !show,
        index: (index + 1) % 10
      });
    }, 1500);
  }

  render() {
    const { index } = this.state;
    const { children } = this.props;
    
    return (
      <Fade left opposite when={this.state.show}>
        { children[index % children.length] }
      </Fade>
    )
  }
}

export default Scroller;