import React from 'react';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Experiance from '../components/Experiance';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';

export default () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Skills /> */}
      <AboutMe />
      {/* <Experiance /> */}
      {/* <Footer /> */}
    </main>
  )
}


