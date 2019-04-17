import React, { Component } from 'react';

import { FRONT_END, BACK_END, DEV_OPS } from '../../constants/Icons';
import profile from '../../assets/adam-icon.jpg';

import Scroller from '../Scroller';
import Icon from '../Icon';
import SectionNavigation from '../SectionNavigation';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__profile-wrapper">
          <img className="hero__profile" src={profile}/>
        </div>
        <div className="hero__header">
          <h1 className="title">Hello, my name is <strong>Adam</strong></h1>
          <h2 className="title">I am a <strong>Full Stack Software Developer</strong></h2>
        </div>
        {/* <Scroller className="hero__scroller">
          <p><strong>Front End</strong>&nbsp;<Icon icon={FRONT_END}/></p>
          <p><strong>Back End</strong>&nbsp;<Icon icon={BACK_END}/></p>
          <p><strong>DevOps</strong>&nbsp;<Icon icon={DEV_OPS}/></p>
        </Scroller> */}
        <SectionNavigation />
      </section>
    )
  }
}

export default Hero;