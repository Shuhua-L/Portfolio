"use client";

import Lottie from "lottie-react";
import spaceBoy from "@/app/assets/space-boy-animation.json";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["My name is Shuhua", "<GirlWhoCodes />", "<CoffeeLover />"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    // container
    <div
      className='container mx-auto my-0 px-16 py-0 md:py-40 h-full
    prose md:prose-lg lg:prose-xl dark:prose-invert max-w-none'>
      {/* content */}
      <div className='items-start flex flex-col justify-start relative gap-20'>
        {/* main section */}
        <div className='flex flex-col-reverse md:flex-row gap-12 text-center md:text-start h-auto items-center justify-center relative '>
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
      </div>
    </div>
  );
};

export default Hero;
