import React from 'react';
import AboutImages from './AboutImages';
import AboutText from './AboutText';

const About = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <AboutImages />
        </div>
        <div className="md:w-1/2">
          <AboutText />
        </div>
      </div>
    </div>
  );
}

export default About;