import React from 'react';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Experiance from '../components/Experiance';

export default ({ data }) => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experiance />
      <Footer />
    </main>
  )
}


