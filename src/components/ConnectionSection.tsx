
import React from 'react';
import { Button } from '@/components/ui/button';

interface ConnectionSectionProps {
  isDark: boolean;
}

const ConnectionSection = ({ isDark }: ConnectionSectionProps) => {
  return (
    <section className={`py-20 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
            <div className={`relative p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <img 
                src="/lovable-uploads/c76c5729-8f9e-4356-8fd8-90e94b4f1976.png" 
                alt="Connection Interface"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}>
                  Connection
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Share quality time.<br />
              And space.
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A more engaging way to get together.
            </p>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Apple Vision Pro makes it easy to collaborate and connect wherever you are. 
              You can see FaceTime participants in life-size video tiles, or you can choose 
              to use your spatial Persona and feel like you are sharing the same space with 
              others. And use SharePlay to watch, listen, and play together with your favorite people.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
              + Learn more about connection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
