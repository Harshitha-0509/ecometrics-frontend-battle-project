
import React, { useEffect, useState } from 'react';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated background shapes */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        style={{
          top: '10%',
          left: '10%',
          transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
        style={{
          top: '50%',
          right: '10%',
          transform: `translateY(${scrollY * -0.15}px) rotate(${-scrollY * 0.03}deg)`
        }}
      />
      <div 
        className="absolute w-64 h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
        style={{
          bottom: '20%',
          left: '20%',
          transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.07}deg)`
        }}
      />
    </div>
  );
};

export default ScrollAnimations;
