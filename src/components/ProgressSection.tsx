
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressSectionProps {
  isDark: boolean;
}

const ProgressSection = ({ isDark }: ProgressSectionProps) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnimating(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            System Performance
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
            Real-time analytics and processing power
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Progress Display */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="text-center mb-6">
              <div className={`text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {progress}%
              </div>
              <Progress value={progress} className="w-full h-4 mb-4" />
              <button
                onClick={startAnimation}
                disabled={isAnimating}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isAnimating 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {isAnimating ? 'Processing...' : 'Start Analysis'}
              </button>
            </div>
          </div>

          {/* Multiple Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'CPU Usage', value: 85, color: 'bg-green-500' },
              { label: 'Memory', value: 72, color: 'bg-blue-500' },
              { label: 'Storage', value: 91, color: 'bg-red-500' }
            ].map((item, index) => (
              <div key={index} className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.label}
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
