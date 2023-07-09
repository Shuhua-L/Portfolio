import React from "react";
import TimelineBar from "./TimelineBar";

type Props = {
  direction: string;
  title: string;
  time: string;
  description: string[];
};

const TimelineSection = ({ direction, title, time, description }: Props) => {
  return (
    <div className={`flex md:contents ${direction === "left" ? "flex-row-reverse" : ""}`}>
      {direction === "left" || <TimelineBar />}
      <div
        className={`bg-secondary px-1 md:px-4 rounded-xl my-4 ml-auto shadow-md
          ${direction === "left" ? "col-start-1 col-end-5" : "col-start-6 col-end-10"}`}>
        <h4 className='mx-2'>{title}</h4>
        <small className='mx-2 text-sm prose-sm prose-gray leading-none'> {time}</small>
        <ul className='leading-tight'>
          {description.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
      {direction === "left" && <TimelineBar />}
    </div>
  );
};

export default TimelineSection;
