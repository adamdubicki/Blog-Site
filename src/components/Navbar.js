import React, { Component } from 'react';
import classNames from 'classnames';

const Y_OFFSET = 10;
class Navbar extends Component {

  state = {
    isSolid: false
  }

  componentDidMount() {
    window.pageYOffset > Y_OFFSET
      ? this.setState({ isSolid: true })
      : this.setState({ isSolid: false })
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    window.pageYOffset > Y_OFFSET
      ? this.setState({ isSolid: true })
      : this.setState({ isSolid: false })
  }

  render() {
    const { isSolid } = this.state;
    const navbarClassNames = classNames(
      'navbar',
      { 'is-solid': isSolid }
    );

    const navbarItemClassNames = classNames(
      'navbar__item',
      { 'is-solid': isSolid }
    );

    return (
      <nav className={navbarClassNames}>
        <a className={navbarItemClassNames}>
          Experiance
        </a>
        <a className={navbarItemClassNames}>
          About Me
        </a>
        <a className={navbarItemClassNames}>
          Contact
        </a>
      </nav>
    )
  }
}

  export default Navbar;