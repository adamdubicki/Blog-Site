import React, { Component } from 'react'

import { BARS, TIMES } from '../constants/Icons';
import classNames from 'classnames';

import Icon from './Icon';

class SectionNavigation extends Component {

  state={
    isOpen: false,
    currentHash: ''
  }

  componentDidMount() {
    this.handleHashChange();
    window.addEventListener('hashchange', this.handleHashChange, false);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange, false);
  }

  handleHashChange = () => {
    const { hash } = window.location;
    this.setState({ 
      currentHash: hash
    });
  }

  onBurgerClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen 
    }));
  }

  render() {
    const { isOpen, currentHash } = this.state;
    const isFloating = (currentHash !== '#home' && currentHash !== '');

    const sectionClassNames = classNames(
      'section-navigation',
      { 'is-floating': isFloating }
    );

    const sectionLinkClassNames = classNames(
      'section-navigation__links',
      { 'is-open': isOpen },
      { 'is-floating': isFloating }
    );

    const burgerClassNames = classNames(
      'section-navigation__hamburger',
      { 'is-bordered': !isOpen },
      { 'is-open': isOpen }
    );

    const coverClassNames = classNames(
      'section-navigation__cover',
      { 'is-open': isOpen }
    )

    const links = [
      'About Me',
      'Skills',
      'Experience',
      'Contact'
    ];

    return (
      <nav className={sectionClassNames}>
        <button
          className={burgerClassNames}
          onClick={() => this.onBurgerClick()}
        >
          <Icon icon={isOpen ? TIMES : BARS}/>
        </button>
        <div 
          className={coverClassNames}
          onClick={() => this.setState({ isOpen:false })}
        />
        <div className={sectionLinkClassNames}>
          {links.map((link) => {
            const href = `#${link.split(' ').join('-').toLowerCase()}`;
            const linkClassNames = classNames(
              { 'is-active': href === currentHash },
              { 'is-bordered': !isOpen },
            );
            return (
              <a 
                className={linkClassNames} 
                href={href}
                key={link}
              >
                {link}
              </a>
            )
          })}
        </div>
      </nav>
    )
  }
}

export default SectionNavigation;