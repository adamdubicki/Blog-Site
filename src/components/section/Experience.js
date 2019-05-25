import React, { Component } from 'react';

import { Timeline, Event } from "react-timeline-scribble";
import ScrollableAnchor from 'react-scrollable-anchor'

class Experience extends Component {
  render() {
    const events = [
      {
        title: "Full Stack Software Developer",
        subtitle: "Freshworks Studio",
        interval: "Oct 2017 - Present",
        image: "https://media.licdn.com/dms/image/C560BAQHoZWFCL2LhEQ/company-logo_400_400/0?e=1556755200&v=beta&t=g0b0v4fxBrdqIAlywmC5-M2xzvBIHizxk8bp96gOnvQ",
        description: [
          "Built RESTful APIs using Laravel/Lumen & Express",
          "Designed and maintained MySQL, Postgresql & AWS DynamodDB databases",
          "Created web applications using React, Redux and Next.js",
          "Coordinated production deployments and migrations onto AWS",
          "Helped interview junior and intermediate developer candidates",
          "Integrated third-party APIs such as Facebook Oauth, Stripe, Pusher and Google Vision",
          "Wrote unit and automated tests using PHPUnit and Jest"
        ]
      },
      {
        title: "Graduation",
        subtitle: "University of Victoria",
        interval: "Aug 2017",
        image: "https://media.licdn.com/dms/image/C560BAQEo4ZvWzpKgEw/company-logo_400_400/0?e=1556755200&v=beta&t=NJgPPfcY_7qHmq3t1GQdA7h0ekUQ6TuS3j1Oy6s9CSM",
        description: [
          "Bachelor's Degree with Distinction",
          "Computer Science with Software Engineering Option",
          "GPA: 7.13 / 9.0"
        ]
      },
      {
        title: "Junior Backend Software Developer",
        subtitle: "Giftbit + Lightrail",
        interval: "May 2016 - Dec 2016",
        image: "https://media.licdn.com/dms/image/C510BAQGquDZ9MxMkzw/company-logo_400_400/0?e=1556755200&v=beta&t=MbZPOsm7BYQnMVtYtpfXM0PSZ5n2fd__eqiHxyRaYKw",
        description: [
          "Built RESTful APIs and backend services with Grails & Groovy",
          "Performed database migrations and production deployments",
          "Integrated third-party APIs",
          "Wrote unit and automated tests using Spock, Jest, and Supertest"
        ]
      },
      {
        title: "QA Analyst",
        subtitle: "IBM",
        interval: "Jan 2015 - Apr 2015",
        image: "https://media.licdn.com/dms/image/C560BAQEZL5_LD7kuhg/company-logo_400_400/0?e=1556755200&v=beta&t=2F5prnODgL7RQJB_4BoqQ5XqxGLpfOrm6kdpA3HOqTM",
        description: [
          "Performed manual testing",
          "Ran and created automated regression tests using Selenium Webdriver",
          "Filed bug reports detailing reproduction steps",
        ]
      }
    ];

    return (
      <ScrollableAnchor id={'experience'}>
        <section className="experience section-container">
          <h2 className="title is-underlined">Experience</h2>
          <div className='experience__timeline'>
            <Timeline>
              {events.map(({ interval, title, subtitle, description }) => (
                <Event 
                  interval={interval}
                  title={title}
                  subtitle={subtitle}
                  key={subtitle}
                >
                  {description.map((descriptionItem, index) => (
                    <p key={index}>{descriptionItem}</p>
                  ))}
                </Event>
              ))}
            </Timeline>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default Experience;

