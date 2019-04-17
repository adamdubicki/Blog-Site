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
      { 'is-bordered': !isOpen },
      { 'is-open': isOpen }
    );

    const sectionLinkClassNames = classNames(
      'section-navigation__links',
      { 'is-open': isOpen }
    );

    const linkClassNames = classNames(
      { 'is-bordered': !isOpen }
    );

    return (
      <nav className="section-navigation">
        <button
          className={burgerClassNames}
          onClick={() => this.onBurgerClick()}
        >
          <Icon icon={isOpen ? TIMES : BARS}/>
        </button>
        <div className={sectionLinkClassNames}>
          <a className={linkClassNames} href="#about-me">About Me</a>
          <a className={linkClassNames} href="#skills">Skills</a>
          <a className={linkClassNames} href="#experiance">Experiance</a>
          <a className={linkClassNames} href="#contact">Contact</a>
        </div>
      </nav>
    )
  }
}

export default SectionNavigation;