import React from 'react';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Experiance from '../components/Experiance';
import AboutMe from '../components/AboutMe';

export default () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experiance />
      <Footer />
    </main>
  )
}


