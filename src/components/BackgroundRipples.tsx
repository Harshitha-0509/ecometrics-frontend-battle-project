
import React, { useEffect, useState } from 'react';

interface BackgroundRipplesProps {
  isDark: boolean;
}

const BackgroundRipples = ({ isDark }: BackgroundRipplesProps) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const createAutoRipple = () => {
      const newRipple = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 2000
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 4000);
    };

    const interval = setInterval(createAutoRipple, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className={`absolute rounded-full ${
            isDark ? 'bg-blue-500/10' : 'bg-purple-500/10'
          }`}
          style={{
            left: ripple.x - 150,
            top: ripple.y - 150,
            width: '300px',
            height: '300px',
            animation: `backgroundRipple 4s ease-out`,
            animationDelay: `${ripple.delay}ms`
          }}
        />
      ))}
      
      <style>{`
        @keyframes backgroundRipple {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundRipples;
