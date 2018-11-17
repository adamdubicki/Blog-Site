import React from 'react';

import Icon from './Icon';

export default ({ icon, subtitle}) =>
  <div className="icon-card">
    <div className="icon-card__content">
      <Icon icon={icon}/>
      <p className="icon-card__subtitle">{subtitle}</p>
    </div>
  </div>