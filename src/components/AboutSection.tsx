
import React from 'react';

interface AboutSectionProps {
  isDark: boolean;
}

const AboutSection = ({ isDark }: AboutSectionProps) => {
  return (
    <section className={`py-20 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-6"></div>
            <div className={`relative p-8 rounded-3xl ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm shadow-2xl`}>
              <div className="space-y-4">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">3D</span>
                </div>
                <div className="text-center">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    ABOUT US
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className={`text-5xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Featured Work
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              We create immersive digital experiences that blend cutting-edge technology 
              with stunning visual design. Our work spans across various industries, 
              delivering innovative solutions that captivate and engage.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Interactive Design
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Creating engaging user interfaces
                </p>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  3D Visualization
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Bringing concepts to life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
