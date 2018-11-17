import React from 'react';

import IconCard from './IconCard';

import profile from '../../assets/adam-icon.jpg';

const ICON_CARDS = [
  {
    "icon": "fa fa-3x fa-code",
    "subtitle": "Frontend"
  },
  {
    "icon": "fa fa-3x fa-server",
    "subtitle": "Backend"
  },
  {
    "icon": "fa fa-3x fa-cloud-upload-alt",
    "subtitle": "DevOps"
  }
]

export default ({ data }) => 
  <div className="home-hero-body hero-body">
    <div className="container has-text-centered typing">
      <div className="columns">
        <div className="column">
          <img className="home-hero-body__profile" src={profile} alt="Adam Dubicki"/>
          <p className="home-hero-body__title is-1 title">
            Hello, I'm Adam.
          </p>
          <p className="home-hero-body__subtitle is-1 subtitle">
            I like to code.
          </p>
        </div>
        <div className="column home-hero-body__right-column">
          <div className="columns">
            <div className="column">
              {ICON_CARDS.map(iconCard => (
                <IconCard 
                  subtitle={iconCard.subtitle}
                  icon={iconCard.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>