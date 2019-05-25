import React, { Component } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

class Skills extends Component {

  render() {
    return (
      <ScrollableAnchor id={'skills'}>
        <section className="skills section-container">
          <h2 className="title is-underlined">Skills</h2>
          <div className="skills__row">
            <div className="skills__column">
              <h3 className="title is-underlined">FrameWorks</h3>
              <ul className="skills__frameworks">
                <li>Express</li>
                <li>Laravel/Lumen</li>
                <li>NestJS</li>
                <li>NextJS</li>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Grails</li>
                <li>Serverless with AWS Lambda</li>
              </ul>
            </div>
            
            <div className="skills__column">
              <h3 className="title is-underlined">Languages</h3>
              <ul className="skills__languages">
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>Groovy</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>PHP</li>
              </ul>
            </div>

            <div className="skills__column">
              <h3 className="title is-underlined">Databases</h3>
              <ul className="skills__databases">
                <li>MySQL</li>
                <li>Postgres</li>
                <li>DynamoDB</li>
                <li>MongoDB</li>
              </ul>
            </div>
            
            <div className="skills__column">
              <h3 className="title is-underlined">DevOps</h3>
              <ul className="skills__devops">
                <li>NewRelic</li>
                <li>TravisCI</li>
                <li>Jenkins</li>
                <li>Bamboo</li>
                <li>EC2</li>
                <li>Elastic Beanstalk</li>
                <li>RDS</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Heroku</li>
                <li>S3</li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default Skills;
