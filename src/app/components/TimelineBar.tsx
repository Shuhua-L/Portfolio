import React from "react";

const TimelineBar = () => {
  return (
    <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
      <div className='h-full w-6 flex items-center justify-center'>
        <div className='h-full w-1 bg-purple pointer-events-none'></div>
      </div>
      <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-highlight shadow'>
        <span className='absolute flex items-center justify-center w-6 h-6 bg-transparent rounded-full text-default'>
          <svg
            className='w-2.5 h-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'>
            <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TimelineBar;
