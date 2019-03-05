import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import bird from '../assets/bird.jpg';
import cat from '../assets/cat.jpg';
import chameleon from '../assets/chameleon.jpg';
import elephants from '../assets/elephants.jpg';
import fox from '../assets/fox.jpg';
import helmet from '../assets/helmet.jpg';
import husky from '../assets/husky.jpg';
import jaguar from '../assets/jaguar.jpg';
import octopus from '../assets/octopus.jpg';
import owl from '../assets/owl.jpg';
import owl2 from '../assets/owl2.jpg';
import owl3 from '../assets/owl3.jpg';
import pug from '../assets/pug.jpg';
import tiger from '../assets/tiger.jpg';
import turtle from '../assets/turtle.jpg';

class AboutMe extends Component {
  render() {
    const photos = [
      {
        src: bird,
        width: 4,
        height: 3
      },
      {
        src: cat,
        width: 4,
        height: 3
      },
      {
        src: chameleon,
        width: 4,
        height: 3
      },
      {
        src: elephants,
        width: 4,
        height: 3
      },
      {
        src: fox,
        width: 4,
        height: 3
      },
      {
        src: helmet,
        width: 4,
        height: 6
      },
      {
        src: husky,
        width: 4,
        height: 3
      },
      {
        src: jaguar,
        width: 4,
        height: 3
      },
      {
        src: octopus,
        width: 4,
        height: 3
      },
      {
        src: owl,
        width: 4,
        height: 3
      },
      {
        src: owl2,
        width: 4,
        height: 3
      },
      {
        src: owl3,
        width: 4,
        height: 6
      },
      {
        src: pug,
        width: 4,
        height: 3
      },
      {
        src: tiger,
        width: 4,
        height: 3
      },
      {
        src: turtle,
        width: 4,
        height: 3
      },
    ];

    return (
      <div className="about-me">
        <Gallery photos={photos}/>
      </div>
    )
  }
}

export default AboutMe;