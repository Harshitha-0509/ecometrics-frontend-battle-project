
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-800 border-t-white rounded-full animate-spin mb-4"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-gray-400 rounded-full animate-spin" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }}></div>
        </div>
        <p className="text-white text-lg font-light">Loading Experience...</p>
      </div>
    </div>
  );
};

export default Loader;
