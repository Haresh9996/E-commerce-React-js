import React from 'react';
import mainImg from '/assets/watch (6).jpg';
import secondWatchImg from '/assets/watch (1).jpg';
import thirdWatchImg from '/assets/watch (2).jpg';

const AboutImages = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2 mb-5 md:mb-0">
        <img src={mainImg} alt="" className='w-full md:rounded-lg md:h-full object-cover' />
      </div>
      <div className="md:w-1/2 flex flex-col gap-5">
        <img src={secondWatchImg} alt="" className='w-full md:rounded-lg md:h-1/2 object-cover' />
        <img src={thirdWatchImg} alt="" className='w-full md:rounded-lg md:h-1/2 object-cover' />
      </div>
    </div>
  );
}

export default AboutImages;