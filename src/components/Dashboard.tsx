
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DashboardProps {
  isDark: boolean;
}

const Dashboard = ({ isDark }: DashboardProps) => {
  return (
    <section id="dashboard" className={`min-h-screen pt-20 pb-12 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
            Carbon Analytics
            <br />
            <span className="text-emerald-500">Dashboard</span>
          </h1>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            Real-time environmental impact tracking and sustainable business intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Explore Dashboard
            </Button>
            <Button variant="outline" size="lg" className={`px-8 py-3 text-lg transition-all duration-300 hover:scale-105 ${
              isDark ? 'border-gray-700 text-white hover:bg-white hover:text-black' : ''
            }`}>
              View Analytics
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Total Emissions', value: '45,048', unit: 'tCO₂e', trend: '+16%' },
            { title: 'Energy Saved', value: '2.3M', unit: 'kWh', trend: '-22%' },
            { title: 'Projects', value: '156', unit: 'Active', trend: '+8%' },
            { title: 'Reduction', value: '27%', unit: 'YoY', trend: '+5%' }
          ].map((stat, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-500 hover:scale-105 animate-fade-in ${
                isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
              }`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <CardTitle className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {stat.value}
                    </span>
                    <span className={`text-sm ml-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.unit}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-emerald-500">
                    {stat.trend}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
