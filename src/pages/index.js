import React from 'react';

import Icon from '../components/Icon';
import profile from '../assets/adam-icon.jpg';

export default () =>
  <div>
    <section className="front">
      <div className="front__container">
        <img className="front__profile" src={profile}/>
        <header className="front__header">
          <h1>
            Adam Dubicki
          </h1>
          <h2>
            Full-Stack Developer
          </h2>
        </header>
        <div className="front__icons">
          Frontend <Icon icon="fa fa-1x fa-code"/> |
          Backend <Icon icon="fa fa-1x fa-server"/> |
          DevOps <Icon icon="fa fa-1x fa-cloud-upload-alt"/>
        </div>
      </div>
    </section>
    <section>
      <ul>
        <li>
          <div>
            <h3>Freshworks Junior Full Stack Developer | Oct 2017 - Present</h3>
            <ul>
              <li>Developed backend APIs using Laravel/Lumen & Express</li>
              <li>Deployed releases on AWS Elastic Beanstalk with Docker</li>
              <li>Created frontend web applications with React, Redux and Next.js</li>
              <li>Integrated third-party API's such as Facebook Oauth, Stripe, Pusher and Google Vision</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h3>Graduated from UVic | Sep 2013 - Aug 2017</h3>
            <ul>
              <li>Bachelors Degree with distinction: Computer Science</li>
              <li>GPA: 7.13 / 9.0 </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h3>Giftbit Junior Developer Co-op | Jan 2015 - Apr 2015</h3>
            <ul>
              <li>Developed and tested RESTful APIs using the Grails web framework</li>
              <li>Integrated with third party APIs</li>
              <li>Performed several database migrations and back-end deployments</li>              
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h3>IBM QA Co-op | Jan 2015 - Apr 2015</h3>
            <ul>
              <li>Ran and created automated test scripts with Selenium Webdriver & Java</li>
              <li>Filed bug reports detailing reproduction steps</li>
              <li>Performed manual testing</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h1>Technologies</h1>
      <div>
        <h2>Frontend</h2>
        <ul>
          <li>HTML 5</li>
          <li>CSS & SASS</li>
          <li>React js</li>
          <li>Next js</li>
          <li>Redux</li>
          <li>Gatsby</li>
          <li>Typescript</li>
          <li>GraphQl</li>
        </ul>
      </div>
      <div>
        <h2>Backend</h2>
        <ul>
          <li>PHP</li>
          <li>Laravel/Lumen</li>
          <li>Express</li>
          <li>Nest js</li>
          <li>Typescript</li>
          <li>GraphQl</li>
          <li>Postgres, Mysql, Mongodb</li>
          <li>Serverless framework</li>
          <li>Python</li>
        </ul>
      </div>
      <div>
        <h2>DevOps</h2>
        <ul>
          <li>Docker</li>
          <li>Docker-Compose</li>
          <li>Kubernetes</li>
          <li>DNS Configuration</li>
          <li>
            <h3>AWS</h3>
            <ul>
              <li>EC2</li>
              <li>Cloudfront</li>
              <li>Lambda</li>
              <li>RDS</li>
              <li>S3</li>
              <li>ECS</li>
              <li>Elastic Beanstalk</li>
              <li>Lightsail</li>
            </ul>
          </li>
        </ul>
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
