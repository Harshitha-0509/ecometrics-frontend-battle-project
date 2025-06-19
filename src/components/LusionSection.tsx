
import React, { useState } from 'react';
import RippleEffect from './RippleEffect';

interface LusionSectionProps {
  isDark: boolean;
}

const LusionSection = ({ isDark }: LusionSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            LUSION
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
            Interactive 3D experiences and visual effects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <RippleEffect isDark={isDark} />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* 3D Visual Element Placeholder */}
        <div className={`relative h-96 rounded-2xl overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Animated 3D-like elements */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-8 h-8 rounded-lg ${
                    i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-white' : 'bg-gray-800'
                  }`}
                  style={{
                    transform: `rotate(${i * 30}deg) translateX(60px) rotate(${-i * 30}deg)`,
                    animation: `float 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <style>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-20px) rotate(180deg);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default LusionSection;
