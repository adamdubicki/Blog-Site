import React, { Component } from 'react';

import Hero from '../components/section/Hero';
import AboutMe from '../components/section/AboutMe';
import Skills from '../components/section/Skills';
import Experiance from '../components/section/Experience';
import Footer from '../components/Footer';

class Index extends Component {
  render() {
    return (
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experiance />
        <Footer />
      </main>
    )
  }
}


export default Index;


