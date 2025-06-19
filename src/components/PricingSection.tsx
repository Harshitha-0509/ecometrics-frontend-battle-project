
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingSectionProps {
  isDark: boolean;
}

const PricingSection = ({ isDark }: PricingSectionProps) => {
  const plans = [
    {
      name: "Starter",
      price: "$15.99",
      period: "per month",
      orders: "Up to 500 orders",
      description: "Just starting and selling with us to Amazon? Perfect for small businesses. Best for small businesses as a first try.",
      popular: false
    },
    {
      name: "Growth",
      price: "$29.99", 
      period: "per month",
      orders: "Up to 2,500 orders",
      description: "Are you ready and scaling opportunities? Ideal for medium to large. Your new growing business looking to scale up opportunities.",
      popular: true
    },
    {
      name: "Pro",
      price: "$59.99",
      period: "per month", 
      orders: "Up to 10,000 orders",
      description: "Have all advanced questions with continued sales. Ideal for professional business plans with rapid sales.",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$119.99",
      period: "per month",
      orders: "30,000 orders",
      description: "Have a high volume business across a large brand. Designed for power users who need large-scale business services.",
      popular: false
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Plan
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
            Find the perfect plan based on your monthly order volume. Whether you're just starting out or scaling fast, choose a plan that fits your growth and unlock the full power of our all-in-one platform.
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Subscriptions start from just $15.99 per month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-2 border-purple-500 shadow-xl' 
                  : isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-purple-600' : isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </CardTitle>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  {plan.orders}<br />
                  <span className="text-xs">per month</span>
                </div>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-purple-600' : isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className={`text-sm mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : isDark 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
