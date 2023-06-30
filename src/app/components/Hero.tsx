"use client";

import Lottie from "lottie-react";
import spaceBoy from "@/app/assets/space-boy-animation.json";

const Hero = () => {
  return (
    // container
    <div className='container mx-auto my-0 px-16 py-0  md:py-40 h-full'>
      {/* content */}
      <div className='items-start flex flex-col justify-start relative gap-20'>
        {/* Animation */}
        <Lottie animationData={spaceBoy} />
      </div>
    </div>
  );
};

export default Hero;
