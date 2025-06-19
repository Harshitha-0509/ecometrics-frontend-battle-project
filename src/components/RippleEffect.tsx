
import React, { useState, useEffect } from 'react';

interface RippleEffectProps {
  isDark: boolean;
}

const RippleEffect = ({ isDark }: RippleEffectProps) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createRipple = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-lg p-8 cursor-pointer transition-all duration-300 ${
        isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
      }`}
      onClick={createRipple}
    >
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-blue-500/30 animate-ping"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: '50px',
            height: '50px',
            animation: 'rippleExpand 1s ease-out'
          }}
        />
      ))}
      
      <div className="relative z-10">
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Interactive Element
        </h3>
        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Click to create ripple effects
        </p>
      </div>
      
      <style jsx>{`
        @keyframes rippleExpand {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default RippleEffect;
