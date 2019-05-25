import React, { Component } from 'react';

import Hero from '../components/section/Hero';
import AboutMe from '../components/section/AboutMe';
import Skills from '../components/section/Skills';
import Experience from '../components/section/Experience';
import Footer from '../components/Footer';

class Index extends Component {
  render() {
    return (
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Footer />
      </main>
    )
  }
}


export default Index;


