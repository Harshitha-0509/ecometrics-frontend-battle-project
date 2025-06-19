
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Ripple effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              animation: `ripple ${3 + i * 0.5}s infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-gray-800 border-t-white rounded-full animate-spin mb-4 mx-auto"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-gray-400 rounded-full animate-spin mx-auto" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }}></div>
        </div>
        
        {/* Loading Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-loading-progress"></div>
        </div>
        
        {/* Percentage Counter */}
        <div className="text-white text-6xl font-bold mb-4 animate-count">
          <span className="animate-pulse">100</span>
        </div>
        
        <p className="text-white text-lg font-light">Loading Experience...</p>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes loading-progress {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 100%;
            transform: translateX(0%);
          }
          100% {
            width: 100%;
            transform: translateX(100%);
          }
        }
        
        .animate-loading-progress {
          animation: loading-progress 2.5s ease-in-out;
        }
        
        .animate-count {
          animation: fadeInUp 1s ease-out 1.5s both;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
