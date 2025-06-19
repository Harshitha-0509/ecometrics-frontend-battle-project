
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BSSCapabilitiesProps {
  isDark: boolean;
}

const BSSCapabilities = ({ isDark }: BSSCapabilitiesProps) => {
  const [activeTab, setActiveTab] = useState('billing');

  const capabilities = [
    {
      id: 'billing',
      name: 'BILLING',
      icon: '💳',
      color: 'bg-pink-200',
      title: 'Real-Time Convergent Billing',
      description: 'Instantaneous, accurate billing across all services and platforms.',
      features: ['Multi-currency support', 'Real-time processing', 'Automated invoicing']
    },
    {
      id: 'charging',
      name: 'CHARGING',
      icon: '👜',
      color: 'bg-yellow-200',
      title: 'Online Charging System',
      description: 'AI-powered insights that predict customer needs and drive personalized experiences.',
      features: ['Real-time charging', 'Usage monitoring', 'Dynamic pricing']
    },
    {
      id: 'catalog',
      name: 'CATALOG',
      icon: '📚',
      color: 'bg-green-200',
      title: 'Product Catalog',
      description: 'Intuitive tools that empower customers to manage their accounts with ease, freeing up your team.',
      features: ['Service management', 'Product configuration', 'Bundle management']
    },
    {
      id: 'events',
      name: 'EVENTS',
      icon: '✖️',
      color: 'bg-blue-200',
      title: 'Event Management System',
      description: 'Comprehensive event processing and management capabilities.',
      features: ['Event correlation', 'Real-time processing', 'Alert management']
    }
  ];

  const activeCapability = capabilities.find(cap => cap.id === activeTab) || capabilities[0];

  return (
    <section id="capabilities" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className={`text-sm uppercase tracking-wide mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            EFFICIENCY, SCALABILITY, AND AGILITY
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Unparalleled
            <br />
            <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>BSS/OSS Capabilities</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {capabilities.map((capability) => (
            <button
              key={capability.id}
              onClick={() => setActiveTab(capability.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === capability.id
                  ? `${capability.color} scale-105 shadow-lg`
                  : isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-900'
              }`}
            >
              <span className="text-xl">{capability.icon}</span>
              <span className="font-medium">{capability.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {activeCapability.title}
            </h3>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {activeCapability.description}
            </p>
            <ul className="space-y-2">
              {activeCapability.features.map((feature, index) => (
                <li key={index} className={`flex items-center space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 transform transition-all duration-500 hover:scale-105`}>
              <CardContent>
                {activeTab === 'billing' && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>EMS</h4>
                      <div className="mt-4 p-4 bg-emerald-500 rounded-lg text-white">
                        <span className="text-2xl font-bold">Billing</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'charging' && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="bg-yellow-100 rounded-lg p-4">
                        <span className="text-3xl font-bold text-gray-900">£0.00</span>
                        <p className="text-sm text-gray-600 mt-2">Current charges</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">TRAFFIC TYPE</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                          <span className="text-sm">COUNTRY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'catalog' && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>ADD-ONS</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black text-white p-3 rounded-lg">
                          <span className="text-sm">Premium</span>
                        </div>
                        <div className="bg-green-500 text-white p-3 rounded-lg">
                          <span className="text-sm">Spotify</span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <p className="text-sm text-gray-600">MOBILE APP ONLY</p>
                        <p className="text-lg font-bold text-gray-900">TOTAL UNLIMITED</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'events' && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Event Processing</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-red-100 rounded">
                          <span className="text-sm">Critical Alert</span>
                          <span className="text-red-600">●</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-yellow-100 rounded">
                          <span className="text-sm">Warning</span>
                          <span className="text-yellow-600">●</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                          <span className="text-sm">Normal</span>
                          <span className="text-green-600">●</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BSSCapabilities;
