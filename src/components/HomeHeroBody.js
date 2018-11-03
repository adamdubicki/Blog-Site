import React from 'react';

import profile from '../../assets/adam-icon.jpg';

export default () => 
  <div className="home-hero-body hero-body">
    <div className="container has-text-centered typing">
      <img className="home-hero-body__profile" src={profile} alt="Adam Dubicki"/>
      <p className="home-hero-body__title title">
        Hello, I'm Adam.
      </p>
      <p className="home-hero-body__subtitle subtitle">
        I like to code.
      </p>
    </div>
  </div>