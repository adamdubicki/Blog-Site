import React, { Component } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

class Skills extends Component {

  render() {
    return (
      <ScrollableAnchor id={'skills'}>
        <section className="skills">
          <h2>Skills</h2>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default Skills;
