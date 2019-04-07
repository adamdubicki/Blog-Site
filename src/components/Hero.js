import React, { Component } from 'react';

import Scroller from '../components/Scroller';
import Icon from '../components/Icon';

import { FRONT_END, BACK_END, DEV_OPS } from '../constants/Icons';
import profile from '../assets/adam-icon.jpg';
class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__profile-wrapper">
          <img className="hero__profile" src={profile}/>
        </div>
        <div className="hero__header">
          <h1>Hello, my name is <strong>Adam</strong></h1>
          <h2>I am a <strong>Full Stack Software Developer</strong></h2>
        </div>
        <Scroller className="hero__scroller">
          <p><strong>{'Front End'}</strong>&nbsp;<Icon icon={FRONT_END}/></p>
          <p><strong>{'Back End'}</strong>&nbsp;<Icon icon={BACK_END}/></p>
          <p><strong>{'DevOps'}</strong>&nbsp;<Icon icon={DEV_OPS}/></p>
        </Scroller>
        <div className="hero__nav">
          <a href="#about-me">About Me</a> |
          <a href="#skills">Skills</a> |
          <a href="#experiance">Experiance</a> |
          <a href="#contact">Contact</a>
        </div>
      </section>
    )
  }
}

export default Hero;