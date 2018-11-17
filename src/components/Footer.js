import React from 'react';
import Icon from './Icon';
import { HOME_MEDIA_ICONS } from '../constants/HeroMediaIcons';


export default () => 
  <footer className="footer">
    {
      HOME_MEDIA_ICONS.map(mediaIcon => (
        <div className="footer__icon">
          <Icon 
            icon={mediaIcon.icon}
            onClick={() => {
              window.location.assign(mediaIcon.location);
            }}
          />
        </div>
      ))
    }
  </footer>