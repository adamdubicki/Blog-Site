import React, { Component } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';
import Icon from './Icon';

class Footer extends Component {
  render() {

    const iconButtons = [
      {
        icon: 'fab fa-1x fa-github',
        href: 'https://github.com/adamdubicki',
        target: '_blank',
      },
      {
        icon: 'fab fa-1x fa-linkedin',
        href: 'https://www.linkedin.com/in/adam-dubicki/',
        target: '_blank',
      },     
      {
        icon: 'fa fa-1x fa-envelope',
        href: 'mailto:adamdubicki@outlook.com',
        target: '_self',
      }
    ]

    return (
      <ScrollableAnchor id={'contact'}>
        <footer className="footer">
          <h2 className="title is-underlined">Get in touch</h2>
          <div className="footer__contact">
            {iconButtons.map(({ icon, href, target }) => (
              <a className="is-bordered" href={href} target={target} key={icon}>
                <Icon icon={icon} />
              </a>
            ))}
          </div>
        </footer>
      </ScrollableAnchor>
    );
  }
}

export default Footer;

