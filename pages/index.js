import Head from "next/head";
import Image from "next/image";
import { Row, Col } from "react-simple-flex-grid";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D9XQYRG0N8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date());  gtag("config", "G-D9XQYRG0N8");',
          }}
        />
        <title>Adam Dubicki | Software Developer Victoria BC</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Adam Dubicki is a full stack software developer living in Victoria BC."
        />
      </Head>

      <main>
        <section className="flex flex-col items-center justify-center w-full flex-1 px-10">
          <Row className="w-full h-screen" gutter={40} align="middle">
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="flex flex-row-reverse" role="presentation">
                <Image
                  layout="intrinsic"
                  height={1000}
                  width={652}
                  src="/helmet-e.jpg"
                  alt="Diving Helmet Hero Image"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="flex flex-col justify-center" role="presentation">
                <h1 className="md:text-5xl xs:text-xl text-center">
                  Hello, my name is <b className="text-primary">Adam</b>
                </h1>
                <h2 className="md:text-4xl xs:text-md text-center">
                  I am a&nbsp;
                  <b className="text-secondary">
                    Full Stack Software Developer
                  </b>
                </h2>
                <hr className="my-5" />
                <Row
                  align="middle"
                  className="md:text-2xl sm:text-md xs:text-sm text-primary text-center"
                >
                  <Col xs={6} sm={6} md={6} lg={3} xl={3} className="px-5">
                    <a href="#about-me">About Me</a>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={3} xl={3} className="px-5">
                    <a href="#skills">Skills</a>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={3} xl={3} className="px-5">
                    <a href="#experience">Experience</a>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={3} xl={3} className="px-5">
                    <a href="#contact">Contact</a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </section>
        <section
          id="about-me"
          className="flex flex-col items-center justify-center w-full flex-1 px-10"
        >
          <Row className="px-12" gutter={40} align="middle">
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="flex flex-row-reverse" role="presentation">
                <Image
                  layout="intrinsic"
                  height={512}
                  width={512}
                  className="rounded"
                  src="/android-chrome-512x512.png"
                  alt="Adam Dubicki Face Image"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <h3 className="md:text-5xl xs:text-xl text-center text-primary">
                About Me
              </h3>
              <hr className="my-5" />
              <p>
                I am a full stack software developer living in beautiful
                Victoria, British Columbia. I received my bachelor's degree in
                computer science from UVic in August 2017. I have experience in
                software architecture and various frameworks such as Laravel,
                Nest JS, and NodeJS. When I am not coding, I enjoy long distance
                running and cycling. Climbing Mt. Finlayson in the summer is my
                favorite hike. When it's too cold for hiking, I am always keen
                to sit down and play some board games.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="flex flex-row-reverse" role="presentation">
                <iframe
                  className="mt-20 w-full"
                  height="500"
                  src="https://www.youtube.com/embed/-4wPE_KlKz4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <p>
                I am self-taught in scratchboard art. I mostly draw animals. My
                designs can be purchased on&nbsp;
                <a
                  className="text-primary"
                  rel="noreferrer"
                  href="https://www.redbubble.com/people/adubicki/explore?asc=u&page=1&sortOrder=recent"
                >
                  redbubble.
                </a>
                For other updates you can follow me on&nbsp;
                <a
                  className="text-primary"
                  href="https://www.instagram.com/a.j.dubicki"
                  rel="noreferrer"
                >
                  instagram.
                </a>
              </p>
            </Col>
          </Row>
        </section>
        <section
          id="skills"
          className="flex flex-col items-center justify-center w-full flex-1 px-10"
        >
          <Row className="px-12 my-20 w-5/6" gutter={40} align="top">
            <Col span={12}>
              <h3 className="text-primary md:text-5xl xs:text-xl text-center">
                Skills
              </h3>
            </Col>
            {[
              {
                title: "FrameWorks",
                skills: [
                  "Express",
                  "Larvel",
                  "NestJS",
                  "NextJS",
                  "React",
                  "Redux",
                  "Django",
                ],
              },
              {
                title: "Languages",
                skills: [
                  "C",
                  "Java",
                  "Python",
                  "Javascript & Typescript",
                  "HTML5",
                  "CSS3 & Sass",
                  "PHP",
                ],
              },
              {
                title: "Databases",
                skills: [
                  "MySQL",
                  "Postgres",
                  "DynamoDB",
                  "MongoDB",
                  "Redshift",
                ],
              },
              {
                title: "DevOps",
                skills: [
                  "NewRelic",
                  "TravisCI",
                  "Jenkins",
                  "EC2",
                  "ECS",
                  "Beanstalk",
                  "RDS",
                  "Docker",
                  "S3",
                  "Cloudfront",
                  "Lambda",
                  "Heroku",
                  "GitlabCI",
                ],
              },
            ].map(({ title, skills }) => (
              <Col xs={12} sm={12} md={3} lg={3} xl={3} key={title}>
                <h4 className="text-secondary md:text-4xl xs:text-xl text-center">
                  {title}
                </h4>
                <hr />
                <ul>
                  {skills.map((skill) => (
                    <li className="text-center" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </section>

        <section
          id="experience"
          className="flex flex-col items-center justify-center w-full flex-1 px-10"
        >
          <Row className="px-12 my-20 w-5/6" gutter={40} align="top">
            <Col span={12}>
              <h3 className="text-primary md:text-5xl xs:text-xl text-center">
                Experience
              </h3>
            </Col>
          </Row>
          <VerticalTimeline>
            {[
              {
                position: "Full Stack Software Developer",
                company: "Cuboh",
                date: "May 2020 - Present",
                description: [
                  "Built RESTful APIs using Django and python with AWS-Lambda",
                  "Designed and maintained MySQL, Postgresql & AWS DynamodDB databases",
                  "Created web applications using React with Hooks",
                  "Coordinated production deployments and migrations onto AWS and Heroku",
                  "Helped interview junior and intermediate developer candidates",
                  "Wrote and architected a React Native mobile application",
                  "Optimized and consolidated the backend architecture to reduce network traffic by over 95%",
                  "Helped plan and organize service migration in a micro-service architecture across several cloud hosting platforms",
                ],
              },
              {
                position: "Junior->Intermediate Full Stack Software Developer",
                company: "FreshWorks Studio",
                date: "Oct 2017 - May 2020",
                description: [
                  "Built RESTful APIs using Laravel/Lumen & Express",
                  "Designed and maintained MySQL, Postgresql & AWS DynamodDB databases",
                  "Created web applications using React, Redux and Next.js",
                  "Coordinated production deployments and migrations onto AWS",
                  "Helped interview junior and intermediate developer candidates",
                  "Integrated third-party APIs such as Facebook Oauth, Stripe, Pusher and Google Vision",
                  "Wrote unit and automated tests using PHPUnit and Jest",
                  "Created frontend libraries, CI/CD and SEO optimized webpages for <a class='text-primary' href='https://ca.aplaceformom.com/'>a Place for Mom</a>",
                  "Built RESTful APIs and backend services for the <a class='text-primary' href='https://freshworks.io/portfolio/foundry-bc-virtual-health-clinic-app/'>Foundry Virtual Clinic app</a>",
                ],
              },
              {
                position: "Graduation",
                company: "University of Victoria",
                date: "Aug 2017",
                description: [
                  "Bachelor's Degree with Distinction",
                  "Computer Science with Software Engineering Option",
                  "GPA: 7.13 / 9.0",
                ],
              },
              {
                position: "Junior Backend Software Developer",
                company: "Giftbit / Lightrail",
                date: "May 2016 - Dec 2016",
                description: [
                  "Built RESTful APIs and backend services with Grails & Groovy",
                  "Performed database migrations and production deployments",
                  "Integrated third-party APIs",
                  "Wrote unit and automated tests using Spock, Jest, and Supertest",
                ],
              },
              {
                position: "QA Analyst",
                company: "IBM",
                date: "Jan 2015 - Apr 2015",
                description: [
                  "Performed manual testing",
                  "Ran and created automated regression tests using Selenium Webdriver",
                  "Filed bug reports detailing reproduction steps",
                ],
              },
            ].map(({ company, position, description, date }) => (
              <VerticalTimelineElement
                key={`${company}-${position}`}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "black", color: "#21bfc2" }}
                date={date}
                contentArrowStyle={{
                  borderRight: "7px solid #e95378",
                }}
              >
                <h3 className="vertical-timeline-element-title text-primary">
                  {position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {company}
                </h4>
                <hr />
                <ul>
                  {description.map((item, index) => (
                    <li key={index}>
                      - <b dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>
      </main>
      <footer
        className="flex items-center justify-center w-full pt-10"
        id="contact"
      >
        <Row
          align="middle"
          className="md:text-2xl sm:text-md xs:text-sm text-center mb-24"
        >
          <Col className="text-center text-xl text-secondary" span={12}>
            Get in touch
            <hr className="my-5" />
          </Col>
          <Col className="text-center text-3xl" span={3}>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/adam-dubicki/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </Col>
          <Col className="text-center text-3xl" span={3}>
            <a
              aria-label="Github"
              href="https://github.com/adamdubicki"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </Col>
          <Col className="text-center text-3xl" span={3}>
            <a
              href="mailto:adamdubicki@outlook.com"
              target="_self"
              aria-label="Email"
            >
              <AiFillMail />
            </a>
          </Col>
          <Col className="text-center text-3xl" span={3}>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/a.j.dubicki/"
              rel="noreferrer"
              target="_self"
            >
              <AiFillInstagram />
            </a>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
