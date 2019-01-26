import React, { Component } from 'react';

class Experiance extends Component {
  render() {
    const eventCards = [
      {
        title: "Junior Full Stack Developer",
        company: "Freshworks Studio",
        time: "Oct 2017 - Present",
        images: [
          "https://media.licdn.com/dms/image/C560BAQHoZWFCL2LhEQ/company-logo_400_400/0?e=1556755200&v=beta&t=g0b0v4fxBrdqIAlywmC5-M2xzvBIHizxk8bp96gOnvQ"
        ],
        description: [
          "Developed backend APIs using Laravel/Lumen & Express",
          "Deployed releases on AWS Elastic Beanstalk with Docker",
          "Created frontend web applications with React, Redux and Next.js",
          "Integrated third-party API's such as Facebook Oauth, Stripe, Pusher and Google Vision"
        ]
      },
      {
        title: "Graduation",
        company: "University of Victoria",
        time: "Sep 2013 - Aug 2017",
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
        company: "Giftbit + Lightrail",
        time: "May 2016 - Dec 2016",
        images: [
          "https://media.licdn.com/dms/image/C510BAQGquDZ9MxMkzw/company-logo_400_400/0?e=1556755200&v=beta&t=MbZPOsm7BYQnMVtYtpfXM0PSZ5n2fd__eqiHxyRaYKw",
          "https://media.licdn.com/dms/image/C4D0BAQHmQdJZDrQnQA/company-logo_400_400/0?e=1556755200&v=beta&t=D3JGiv5hO9YIc_AEmj0ZjbO8MkOcWO3pHz6JH1Pdl0g"
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
        company: "IBM",
        time: "Jan 2015 - Apr 2015",
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
    ]
    return (
      <section className="experiance">
        {eventCards.map(({ title, company, time, images, description }) => (
          <div className="experiance__card">
            <div className="experiance__event">
              <div className="experiance__image-wrapper">
                {images.map(image => 
                  <img 
                    className="experiance__event-image"
                    src={image}
                  />
                )}
              </div>
              <div className="experiance__event-company">
                  { company }
              </div>
              <div className="experiance__event-title">
                { title }
              </div>
              <div className="experiance__event-subtitle">
                { time }
              </div>
            </div>
            <div className="experiance__description">
              <ul>
                {description.map((item) => 
                  <li>{item}</li>
                )}
              </ul>
            </div>
          </div>
        ))}
        {/* <div className="experiance__card">
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
            </ul>
          </div>
        </div> */}
        {/* <div className="experiance__card">
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
        </div> */}
      </section>
    )
  }
}

export default Experiance;

