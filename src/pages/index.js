import React, { Component } from 'react';

import profile from '../assets/adam-icon.jpg';
import { FRONT_END, BACK_END, DEV_OPS } from '../constants/Icons';

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

class Index extends Component {
  render() {
    return (
      <main>
        <Hero>
          <Hero.Profile profile={profile}/>
          <Hero.Header>
            <h1>Hello, my name is <strong>Adam</strong></h1>
            <h2>I am a <strong>Full Stack Software Developer</strong></h2>
          </Hero.Header>
          <Hero.Scroller>
            <Hero.ScrollItem text='Front-End' icon={FRONT_END}/>
            <Hero.ScrollItem text='Back-End'icon={BACK_END}/>
            <Hero.ScrollItem text='DevOps' icon={DEV_OPS}/>
          </Hero.Scroller>
        </Hero>
        {/* <Skills /> */}
        <AboutMe />
        {/* <Experiance /> */}
        {/* <Footer /> */}
      </main>
    )
  }
}


export default Index;


