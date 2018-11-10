import React from 'react';

import Icon from './Icon';

import profile from '../../assets/adam-icon.jpg';

export default () => 
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
              <div className="home-hero-body__icon-card">
                <div className="home-hero-body__icon-card__content">
                  <Icon icon="fa fa-3x fa-code"/>
                  <p className="subtitle">Frontend</p>
                </div>
              </div>
              <div className="home-hero-body__icon-card">
                <div className="home-hero-body__icon-card__content">
                  <Icon icon="fa fa-3x fa-server"/>
                  <p className="subtitle">Backend</p>
                </div>
              </div>
              <div className="home-hero-body__icon-card">
                <div className="home-hero-body__icon-card__content">
                  <Icon icon="fa fa-3x fa-cloud-upload-alt"/>
                  <p className="subtitle">DevOps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
