import React from "react";
import Timeline from "../components/Timeline";

const aboutMe = `I am a skilled and motivated full-stack software engineer with
a background in Mathematics. I am looking to fuel my passion for the tech industry
by developing applications that simplify the lives of others.`;

const About = () => {
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
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
