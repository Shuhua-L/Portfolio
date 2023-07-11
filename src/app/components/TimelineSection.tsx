import React from "react";
import TimelineBar from "./TimelineBar";

type Props = {
  direction: string;
  position: string;
  experience: {
    title: string;
    subtitle: string;
    time: string;
    description: string;
  };
};

const TimelineSection = ({
  direction,
  position,
  experience: { title, subtitle, time, description },
}: Props) => {
  return (
    <div className={`flex md:contents ${direction === "left" ? "flex-row-reverse" : ""}`}>
      {direction === "left" || <TimelineBar position={position} />}
      <div
        className={`bg-secondary px-4 rounded-xl my-4 ml-auto shadow-md
          ${direction === "left" ? "col-start-1 col-end-5" : "col-start-6 col-end-10"}`}>
        <h3 className=''>
          {title}
          <br />
          {subtitle.length > 0 && <small className='prose-gray leading-tight'>{subtitle}</small>}
        </h3>

        <time className='block prose-sm leading-none text-comment'>{time}</time>
        <p className='prose-gray leading-6'>{description}</p>
      </div>

      {direction === "left" && <TimelineBar position={position} />}
    </div>
  );
};

export default TimelineSection;
