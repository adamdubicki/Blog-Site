import React from 'react';
import Icon from './Icon';
import { HOME_MEDIA_ICONS } from '../constants/HeroMediaIcons';


export default () => 
  <footer className="footer">
    <nav className="footer__level level">
      <div className="footer__level-item level-item has-text-centered">
        <p className="title">Around the Web</p>
        <nav className="level">
          {
            HOME_MEDIA_ICONS.map(mediaIcon => (
              <div className="level-item has-text-centered">
                <Icon 
                  icon={mediaIcon.icon}
                  onClick={() => {
                    window.location.assign(mediaIcon.location);
                  }}
                />
              </div>
            ))
          }
          </nav>
      </div>
      <div className="footer__level-item level-item has-text-centered">
        <p className="title">Contact Me</p>
      </div>
    </nav>
  </footer>