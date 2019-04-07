import React, { Component } from 'react';

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experiance from '../components/Experiance';
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


