import { CalenderIcon } from "@/assets/icons";

type Props = {
  position: string;
};

const TimelineBar = ({ position }: Props) => {
  const dotPosition =
    position === "start" ? "bottom-0" : position === "latest" ? "top-0" : "hidden";

  return (
    <div className='col-start-5 col-end-6 md:mx-auto relative mr-3 md:mr-7 lg:mr-10'>
      <div className='h-full w-6 flex items-center justify-center'>
        <div className='h-full w-1 bg-purple pointer-events-none'></div>
      </div>
      <div className={`w-4 h-4 absolute ms-1 rounded-full bg-pink shadow ${dotPosition}`}></div>
      <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple shadow'>
        <span className='absolute flex items-center justify-center w-6 h-6 bg-transparent rounded-full text-default'>
          <CalenderIcon />
        </span>
      </div>
    </div>
  );
};

export default TimelineBar;
