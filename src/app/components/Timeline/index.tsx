import TimelineSection from "./TimelineSection";
import experiences from "@/data/experience";

const Timeline = () => {
  return (
    <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2'>
      {experiences.map((experience, idx) => {
        const dir = idx % 2 === 0 ? "left" : "right";
        const pos = idx === 0 ? "latest" : idx === experiences.length - 1 ? "start" : "";
        return <TimelineSection key={idx} direction={dir} position={pos} experience={experience} />;
      })}
    </div>
  );
};

export default Timeline;
