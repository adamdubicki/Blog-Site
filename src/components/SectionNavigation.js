import React, { Component } from 'react'

import { BARS, TIMES } from '../constants/Icons';
import classNames from 'classnames';

import Icon from './Icon';

class SectionNavigation extends Component {

  state={
    isOpen: false
  }

  onBurgerClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen 
    }));
  }

  render() {
    const { isOpen } = this.state;
    const burgerClassNames = classNames(
      'section-navigation__hamburger',
      'is-bordered',
      { 'is-open': isOpen }
    );

    return (
      <nav className="section-navigation">
        <button
          className={burgerClassNames}
          onClick={() => this.onBurgerClick()}
        >
          <Icon icon={isOpen ? TIMES : BARS}/>
        </button>
        <div className="section-navigation__links">
          <a className="is-bordered" href="#about-me">About Me</a>|
          <a className="is-bordered" href="#skills">Skills</a>|
          <a className="is-bordered" href="#experiance">Experiance</a>|
          <a className="is-bordered" href="#contact">Contact</a>
        </div>
      </nav>
    )
  }
}

export default SectionNavigation;