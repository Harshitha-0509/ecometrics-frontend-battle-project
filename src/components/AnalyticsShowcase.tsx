
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AnalyticsShowcaseProps {
  isDark: boolean;
}

const AnalyticsShowcase = ({ isDark }: AnalyticsShowcaseProps) => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      title: 'Financial Reports',
      description: 'Comprehensive financial analytics and reporting',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">Total Income</h4>
              <p className="text-2xl font-bold text-green-900">$426.8K</p>
              <p className="text-sm text-green-600">↑ 36.5% vs last year</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800">Cash Flow</h4>
              <p className="text-2xl font-bold text-blue-900">$288,721</p>
              <p className="text-sm text-blue-600">↑ 202.9%</p>
            </div>
          </div>
          <div className="h-32 bg-gradient-to-r from-blue-200 to-green-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-700">Financial Chart Visualization</span>
          </div>
        </div>
      )
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics with AI insights',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800">Business Overview Report</h4>
            <p className="text-sm text-purple-600 mt-2">Edge Design Studio - August 2024</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-100 p-3 rounded">
              <span className="text-sm font-medium">PDF Export</span>
            </div>
            <div className="bg-green-100 p-3 rounded">
              <span className="text-sm font-medium">WhatsApp Share</span>
            </div>
          </div>
          <div className="bg-emerald-100 p-4 rounded-lg">
            <span className="text-emerald-800 font-semibold">💚 90% Financial Health Score</span>
          </div>
        </div>
      )
    },
    {
      title: 'Data Consolidation',
      description: 'Multi-platform data integration',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-green-500 text-white p-3 rounded-lg text-center">
              <span className="text-sm font-bold">QuickBooks</span>
            </div>
            <div className="bg-blue-500 text-white p-3 rounded-lg text-center">
              <span className="text-sm font-bold">Xero</span>
            </div>
            <div className="bg-emerald-500 text-white p-3 rounded-lg text-center">
              <span className="text-sm font-bold">Sage</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <span className="text-sm font-bold">US Branch</span>
            </div>
            <div className="bg-red-100 p-3 rounded-lg text-center">
              <span className="text-sm font-bold">AUS Branch</span>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <span className="text-blue-800 font-semibold">Global Finance Integration</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="analytics" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>4.8 rating on Capterra</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>4.8 rating on G2</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>350+ reviews on Xero</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>550+ reviews on QuickBooks</span>
            </div>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Create reports, forecasts,
            <br />
            dashboards & consolidations
          </h2>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-yellow-500 text-lg">✨</span>
            <span className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Now with AI-insights</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
              Start 14-day free trial →
            </Button>
            <Button variant="outline" size="lg" className={`px-8 py-3 text-lg ${isDark ? 'border-gray-600 text-white' : ''}`}>
              📊 See what we do
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <Card 
              key={index}
              className={`transition-all duration-500 hover:scale-105 cursor-pointer ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } ${activeDemo === index ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setActiveDemo(index)}
            >
              <CardContent className="p-6">
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {demo.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {demo.description}
                </p>
                <div className="transform transition-all duration-300">
                  {demo.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsShowcase;
