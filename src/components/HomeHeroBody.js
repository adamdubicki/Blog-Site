import React from 'react';

import profile from '../../assets/adam-icon.jpg';

export default () => 
  <div className="home-hero-body hero-body">
    <div className="container has-text-centered typing">
      <p className="home-hero-body__title is-1 title">
        Hello, I'm Adam.
      </p>
      <img className="home-hero-body__profile" src={profile} alt="Adam Dubicki"/>
      <p className="home-hero-body__subtitle is-1 subtitle">
        I like to code.
      </p>
    </div>
  </div>