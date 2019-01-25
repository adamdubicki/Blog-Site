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

    return (
      <section className={navbarClassNames}>
        <div className='navbar__wrapper'>
          <div className='navbar__right'>
            <div className="navbar__item">
              <h1 className="navbar__title">Adam</h1>
            </div>
          </div>
          <div className='navbar__left'>
            <div className="navbar__item">Experiance</div>
            <div className="navbar__item">About</div>
          </div>
        </div>
      </section>
    )
  }
}

  export default Navbar;