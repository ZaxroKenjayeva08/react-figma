// src/components/Hero.js
import React from 'react';

function Section() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7]">
            AI Marketing.<br />Optimized Reach.
          </h1>
          <p className="text-lg text-gray-400">
          DOML is a digital media agency powered by AI <br/> technology providing real time, data-driven insights <br/> on your business and audience. The mission of DOML <br/> is to create the best experiences for companies <br/> through intelligent insights, powerful analytics and  strategic execution.
          </p>
          <button className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] text-white px-6 py-3 rounded-md hover:bg-gradient-to-l transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img 
            src="/image 3.png" 
            alt="AI Marketing" 
            className="w-full h-full object-cover rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
