import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Icon from '../components/Icon';

class Hero extends Component {
  state = {
    subtitleIndex: 0,
    show: false
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { show, subtitleIndex, subtitles } = this.state;
      this.setState({ 
        show: !show,
        subtitleIndex: (subtitleIndex + 1) % 10
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <section className="hero">
        {this.props.children}
      </section>
    )
  }
}

const Profile = ({ profile }) => (
  <div className="hero__profile-wrapper">
    <img className="hero__profile" src={profile}/>
  </div>
);

const Header = ({ children }) => (
  <header className="hero__header">
    { children }
  </header>
)

const Scroller = ({children }) => {
  return (
    // <Fade bottom opposite when={this.state.show}>
    //   {children}
    // </Fade>
    <div>{children[0]}</div>
  )
}

const ScrollItem = ({ text, icon }) => (
  <h2>
    <strong>{text}</strong>&nbsp;
    <Icon icon={icon}/>
  </h2>
)

Hero.Profile = Profile;
Hero.Header = Header;
Hero.Scroller = Scroller;
Hero.ScrollItem = ScrollItem;

export default Hero;