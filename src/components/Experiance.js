import React, { Component } from 'react';
import { Timeline, Event } from "react-timeline-scribble";

class Experiance extends Component {
  render() {
    const events = [
      {
        title: "Junior Full Stack Developer",
        subtitle: "Freshworks Studio",
        interval: "Oct 2017 - Present",
        images: [
          "https://media.licdn.com/dms/image/C560BAQHoZWFCL2LhEQ/company-logo_400_400/0?e=1556755200&v=beta&t=g0b0v4fxBrdqIAlywmC5-M2xzvBIHizxk8bp96gOnvQ"
        ],
        description: [
          "Developed backend APIs using Laravel/Lumen & Express",
          "Created frontend web applications with React, Redux and Next.js",
          "Deployed releases on AWS Elastic Beanstalk, AWS ECS and Docker",
          "Interviewed junior and intermediate developer candidates"
        ]
      },
      {
        title: "Graduation",
        subtitle: "University of Victoria",
        interval: "Aug 2017",
        images: [
          "https://media.licdn.com/dms/image/C560BAQEo4ZvWzpKgEw/company-logo_400_400/0?e=1556755200&v=beta&t=NJgPPfcY_7qHmq3t1GQdA7h0ekUQ6TuS3j1Oy6s9CSM"
        ],
        description: [
          "Bachelors Degree with distinction",
          "Computer Science with Software Engineering Option",
          "GPA: 7.13 / 9.0 "
        ]
      },
      {
        title: "Junior Back-end Developer",
        subtitle: "Giftbit + Lightrail",
        interval: "May 2016 - Dec 2016",
        images: [
          "https://media.licdn.com/dms/image/C510BAQGquDZ9MxMkzw/company-logo_400_400/0?e=1556755200&v=beta&t=MbZPOsm7BYQnMVtYtpfXM0PSZ5n2fd__eqiHxyRaYKw"
        ],
        description: [
          "Developed backend APIs using Laravel/Lumen & Express",
          "Deployed releases on AWS Elastic Beanstalk with Docker",
          "Created frontend web applications with React, Redux and Next.js",
          "Integrated third-party API's such as Facebook Oauth, Stripe, Pusher and Google Vision"
        ]
      },
      {
        title: "QA Analyst",
        subtitle: "IBM",
        interval: "Jan 2015 - Apr 2015",
        images: [
          "https://media.licdn.com/dms/image/C560BAQEZL5_LD7kuhg/company-logo_400_400/0?e=1556755200&v=beta&t=2F5prnODgL7RQJB_4BoqQ5XqxGLpfOrm6kdpA3HOqTM"
        ],
        description: [
          "Developed backend APIs using Laravel/Lumen & Express",
          "Deployed releases on AWS Elastic Beanstalk with Docker",
          "Created frontend web applications with React, Redux and Next.js",
          "Integrated third-party API's such as Facebook Oauth, Stripe, Pusher and Google Vision"
        ]
      }
    ];

    return (
      <section className="experiance">
        <Timeline>
          {events.map(({ interval, title, subtitle, description }) => (
            <Event interval={interval} title={title} subtitle={subtitle}>
              {description.map((descriptionItem) => (
                <p>{descriptionItem}</p>
              ))}
            </Event>
          ))};
        </Timeline>
      </section>
    )
  }
}

export default Experiance;

