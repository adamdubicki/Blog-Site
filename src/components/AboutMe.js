import React, { Component } from 'react';
import Slider from "react-slick";

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
      bird,
      cat,
      chameleon,
      elephants,
      fox,
      helmet,
      husky,
      jaguar,
      octopus,
      owl,
      owl2,
      owl3,
      pug,
      tiger,
      turtle,
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "about-me__slider"
    };
    return (
      <div className="about-me">
        <Slider {...settings}>
          {photos.map((photo) => (
            <div className="about-me__slider-item">
              <img src={photo}/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default AboutMe;