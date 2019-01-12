import React from 'react';

import Icon from './Icon';
import { FRONT_END, BACK_END, DEV_OPS } from '../constants/Icons';
import profile from '../assets/adam-icon.jpg';
import Fade from 'react-reveal/Fade';

class Hero extends React.Component {
  state = {
    subtitleIndex: 0,
    subtitles: [
      {
        text: 'Front-end',
        icon: FRONT_END
      },
      {
        text: 'Back-end',
        icon: BACK_END
      },
      {
        text: 'DevOps',
        icon: DEV_OPS
      }
    ]
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { subtitleIndex, subtitles } = this.state;
      this.setState({
        subtitleIndex: (subtitleIndex + 1) % subtitles.length
      }
    )}, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { subtitleIndex, subtitles } = this.state;
    const { text, icon } = subtitles[subtitleIndex];
    return (
      <section className="hero">
        <div className="hero__profile-wrapper">
          <img className="hero__profile" src={profile}/>
        </div>
        <header className="hero__header">
          <h1>
            Hello, my name is <strong>Adam</strong>
          </h1>
          <Fade bottom opposite text spy={subtitleIndex} appear exit>
            <h2>
              <strong>{text}</strong>&nbsp;
              <Icon icon={icon}/>
            </h2>
          </Fade>
        </header>
      </section>
    )
  }
}

  export default Hero;