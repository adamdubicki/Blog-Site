import React, { Component } from 'react';

class Experiance extends Component {
  render() {
    return (
      <section className="experiance">
        <div className="experiance__card">
          <div className="experiance__event">
            <div className="experiance__event-title">
              Freshworks Junior Full Stack Developer
            </div>
            <div className="experiance__event-subtitle">
              Oct 2017 - Present
            </div>
          </div>
          <div className="experiance__description">
            <ul>
              <li>Developed backend APIs using Laravel/Lumen & Express</li>
              <li>Deployed releases on AWS Elastic Beanstalk with Docker</li>
              <li>Created frontend web applications with React, Redux and Next.js</li>
              <li>Integrated third-party API's such as Facebook Oauth, Stripe, Pusher and Google Vision</li>
            </ul>
          </div>
        </div>
        <div className="experiance__card">
          <div className="experiance__event">
            <div className="experiance__event-title">
              Graduated from UVic
            </div>
            <div className="experiance__event-subtitle">
              Oct 2017 - Present
            </div>
          </div>
          <div className="experiance__description">
            <ul>
              <li>Bachelors Degree with distinction: Computer Science</li>
              <li>GPA: 7.13 / 9.0 </li>
            </ul>
          </div>
        </div>
        <div className="experiance__card">
          <div className="experiance__event">
            <div className="experiance__event-title">
              Giftbit Junior Developer Co-op 
            </div>
            <div className="experiance__event-subtitle">
              Jan 2015 - Apr 2015
            </div>
          </div>
          <div className="experiance__description">
            <ul>
              <li>Developed and tested RESTful APIs using the Grails web framework</li>
              <li>Integrated with third party APIs</li>
              <li>Performed several database migrations and back-end deployments</li>              
            </ul>
          </div>
        </div>
        <div className="experiance__card">
          <div className="experiance__event">
            <div className="experiance__event-title">
              IBM QA Co-op 
            </div>
            <div className="experiance__event-subtitle">
              Jan 2015 - Apr 2015
            </div>
          </div>
          <div className="experiance__description">
            <ul>
              <li>Developed and tested RESTful APIs using the Grails web framework</li>
              <li>Integrated with third party APIs</li>
              <li>Performed several database migrations and back-end deployments</li>              
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Experiance;

