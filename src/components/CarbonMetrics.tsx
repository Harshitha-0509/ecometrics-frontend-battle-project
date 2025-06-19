
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  change: string;
  changeDirection: 'up' | 'down';
  isDark: boolean;
}

const MetricCard = ({ title, value, unit, change, changeDirection, isDark }: MetricCardProps) => {
  return (
    <Card className={`transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <CardHeader className="pb-2">
        <CardTitle className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div>
            <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {value}
            </span>
            <span className={`text-sm ml-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {unit}
            </span>
          </div>
          <div className={`text-sm font-medium ${changeDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {changeDirection === 'up' ? '↗' : '↘'} {change}
          </div>
        </div>
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${changeDirection === 'up' ? 'bg-green-500' : 'bg-red-500'}`}
            style={{ width: `${Math.abs(parseFloat(change))}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

interface CarbonMetricsProps {
  isDark: boolean;
}

const CarbonMetrics = ({ isDark }: CarbonMetricsProps) => {
  const metrics = [
    {
      title: 'Managed portfolio carbon footprint',
      value: '45,048',
      unit: 'tCO₂e',
      change: '16%',
      changeDirection: 'up' as const
    },
    {
      title: 'Managed portfolio energy intensity',
      value: '123',
      unit: 'kWh/m²',
      change: '22%',
      changeDirection: 'down' as const
    },
    {
      title: 'Managed portfolio energy consumption',
      value: '47,790,662',
      unit: 'kWh',
      change: '27%',
      changeDirection: 'down' as const
    }
  ];

  return (
    <section id="metrics" className={`py-20 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Carbon Footprint Analytics
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Real-time environmental impact metrics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <MetricCard {...metric} isDark={isDark} />
            </div>
          ))}
        </div>

        <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Embodied Carbon Emissions
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Target 2030</span>
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>500 kgCO₂e/m²</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Target 2025</span>
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>600 kgCO₂e/m²</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonMetrics;
