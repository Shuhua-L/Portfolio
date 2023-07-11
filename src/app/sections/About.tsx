import React from "react";
import TimelineSection from "../components/TimelineSection";

type Props = {};

const hackReactor = {
  title: "Hack Reactor",
  subtitle: "",
  time: "2023",
  description: `
  The intense 12-week program provided a comprehensive curriculum, offering hands-on
  experience working solo, in pairs, and as part of a team. The 11-hour daily
  schedule and 8-hour Saturday classes were challenging but well worth it.
  I gained invaluable expertise in various technologies such as TypeScript,
  React, TailwindCSS, Express, PostgreSQL, MongoDB, Jest, and AWS.`,
};

const CS50Web = {
  title: "CS50's Web Programming with Python and JavaScript",
  subtitle: "",
  time: "2022 - 2023",
  description: `
    This online course is an empowering journey
    into the world of web app development. Dive deep into Python, JavaScript, and SQL,
    and explore frameworks like Django, React, and Bootstrap. With hands-on projects,
    I learned about database design, scalability, security, and user experience. `,
};

const BachelorDegree = {
  title: "University of Massachusetts, Boston",
  subtitle: "B.S. in Mathematics",
  time: "2016 - 2020",
  description: `Relevant courses: Calculus I-III,
    Linear Algebra,
    Logic,
    Probability and Statistics,
    Discrete Mathematics,
    Algorithms.`,
};

const aboutMe = `I am a skilled and motivated full-stack software engineer with
a background in Mathematics. I am looking to fuel my passion for the tech industry
by developing applications that simplify the lives of others.`;

const About = (props: Props) => {
  return (
    // container
    <div className='container max-w-7xl mx-auto my-0 px-6 lg:px-16 py-28 md:py-40 min-h-screen'>
      {/* content */}
      <div className='flex flex-col justify-center relative'>
        <div className=''>
          <h1>About Me</h1>
          <p className='max-w-prose'>{aboutMe}</p>
        </div>
        <h2>Experience</h2>
        <div id='timeline'>
          <div className='flex flex-col md:grid grid-cols-9 mx-auto'>
            <TimelineSection direction='left' position='latest' experience={hackReactor} />
            <TimelineSection direction='right' position='' experience={CS50Web} />
            <TimelineSection direction='left' position='start' experience={BachelorDegree} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
