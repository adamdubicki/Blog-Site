import React from 'react';

import Icon from '../components/Icon';
import profile from '../assets/adam-icon.jpg';

export default () =>
  <div>
    <section className="front">
      <div className="front__container">
        <img src={profile}/>
        <h1>
          Adam Dubicki
        </h1>
        <h2>
          Full-Stack Developer
        </h2>
        <ul className="front__icon-list">
          <li>Frontend <Icon icon="fa fa-1x fa-code"/></li>
          <li>Backend <Icon icon="fa fa-1x fa-server"/></li>
          <li>DevOps <Icon icon="fa fa-1x fa-cloud-upload-alt"/></li>
        </ul>
      </div>
    </section>
    <section>
      <ul>
        <li>Junior Full Stack Developer</li>
        <li>Graduated From UVic</li>
        <li>Giftbit - Junior Developer Co-op</li>
        <li>IBM - QA Tester Co-op</li>
      </ul>
    </section>
    <section>
      <h1>Technologies</h1>
      <div>
        <h2>Frontend</h2>
      </div>
      <div>
        <h2>DevOps</h2>
      </div>
    </section>
    <footer className="footer">
      <h1>Get in touch</h1>
      <div className="footer__contact">
        <Icon icon="fab fa-1x fa-github"/>
        <Icon icon="fab fa-1x fa-linkedin"/>
        <Icon icon="fas fa-1x fa-envelope"/>
      </div>
    </footer>
  </div>
