import React from "react";
import TimelineSection from "../components/TimelineSection";

type Props = {};

const hackReactor = {
  title: "Hack Reactor",
  time: "March 2023 - June 2023",
  description: [
    "12-week software engineering immersive program with 800+ hours of coding",
    "Full-Stack development with JavaScript, React, Express, PostgreSQL, MongoDB, and PostgreSQL in an AGILE environment",
    "Relevant Coursework: JavaScript, React, Node, Express, HTML, CSS, PostgreSQL, MongoDB, Jest, AWS",
  ],
};

const aboutMe = `As a junior full-stack developer, I bring a diverse skill set to the table, including
proficiency in React, TypeScript, Tailwind, Node.js, and Next.js. With a keen eye for
detail, I excel in creating responsive websites that offer a smooth user experience. My
passion lies in crafting dynamic and attractive interfaces through writing clean and
optimized code, along with the latest development tools and techniques. Continual growth
and learning are important to me, as I always aim to stay updated with the latest
advancements in the field. By embracing new technologies and methodologies, my goal is
to provide innovative solutions that go beyond expectations.`;

const About = (props: Props) => {
  return (
    // container
    <div className='container max-w-7xl mx-auto my-0 px-6 lg:px-16 py-28 md:py-40'>
      {/* content */}
      <div className='items-center flex flex-col justify-center relative'>
        <div>
          <h1>About Me</h1>
          <p className='max-w-prose'>{aboutMe}</p>
        </div>
        <h2>Experience</h2>
        <div id='timeline'>
          <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2'>
            <TimelineSection
              direction='left'
              title={hackReactor.title}
              time={hackReactor.time}
              description={hackReactor.description}
            />
            <TimelineSection
              direction='right'
              title={hackReactor.title}
              time={hackReactor.time}
              description={hackReactor.description}
            />

            <TimelineSection
              direction='left'
              title={hackReactor.title}
              time={hackReactor.time}
              description={hackReactor.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
