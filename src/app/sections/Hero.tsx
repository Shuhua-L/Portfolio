"use client";

import Lottie from "lottie-react";
import spaceBoy from "@/app/assets/space-boy-animation.json";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["My name is Shuhua", "<GirlWhoCodes />", "<CoffeeLover />"],
    loop: true,
    delaySpeed: 3000,
  });

  const techStack = ["javascript", "typescript", "react", "tailwindcss", "express", "nodejs"];

  return (
    // container
    <div className='container max-w-7xl mx-auto my-0 px-16 py-10 md:py-20 md:prose-lg lg:prose-xl min-h-screen'>
      {/* content */}
      <div className='items-start flex flex-col justify-start relative gap-10'>
        {/* main section */}
        <div className='flex flex-col-reverse lg:flex-row gap-12 text-center md:text-start h-auto items-center justify-center relative '>
          {/* text */}
          <div className='flex flex-col max-w-3xl relative'>
            <h1>
              Hi there 👋
              <br />
              <small>
                <span>{text}</span>
                <Cursor />
              </small>
            </h1>

            <p>Hi, I&#39;m Shuhua Liu. A passionate Full-Stack Developer based in Boston, MA. 📍</p>
          </div>

          {/* Animation */}
          <Lottie animationData={spaceBoy} />
        </div>

        {/* skills */}
        <div className='hidden md:flex items-center mb-2'>
          <p className='border-r-2 pr-2 border-current font-mono font-semi font-medium'>
            Tech Stack
          </p>
          <div className='logos'>
            <ul className='flex flex-wrap gap-8'>
              {techStack.map((tool, idx) => (
                <li
                  key={idx}
                  className='items-center bg-primary dark:bg-[#F8F8F2] shadow-md cursor-pointer relative flex h-14 w-14 rounded-full'>
                  <Image
                    src={`./images/${tool}.svg`}
                    title={tool}
                    height={40}
                    width={40}
                    alt={`skill-icon-${tool}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
