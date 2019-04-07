import React, { Component } from 'react';

import Slider from "react-slick";
import ScrollableAnchor from 'react-scrollable-anchor'

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
      slidesToShow: 3,
      slidesToScroll: 3,
      className: "about-me__slider",
      lazyLoad: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };

    return (
      <ScrollableAnchor id={'about-me'}>
        <section className="about-me">
          <h2>About Me</h2>
          <p className="about-me__content">
            I am a software developer living in beautiful Victoria, British Columbia. I received my bachelor's degree in computer science from UVic in August 2017. Some of my main interests are in web development, data mining, and computer graphics.
            When I am not coding, I enjoy hiking and cycling. Climbing Mt. Finlayson in the summer has always been my favorite. When it's too cold for hiking, I am always keen to sit down and play some board games. I am also self-taught in drawing and use it to relax.
          </p>
          <div className="about-me__slider-container">
            <Slider {...settings}>
              {photos.map((photo) => (
                <div className="about-me__slider-item" key={photo}>
                  <img src={photo}/>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default AboutMe;