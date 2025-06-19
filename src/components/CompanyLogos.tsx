
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CompanyLogosProps {
  isDark: boolean;
}

const CompanyLogos = ({ isDark }: CompanyLogosProps) => {
  const [showCustomers, setShowCustomers] = useState(false);

  const logos = [
    { name: 'CURSOR', logo: '⬡ CURSOR' },
    { name: 'Brex', logo: '🏁 Brex' },
    { name: 'remote', logo: 'Ʀ remote' },
    { name: 'ARC', logo: '⌘ ARC' },
    { name: 'runway', logo: 'Ʀ runway' },
    { name: 'descript', logo: '≡ descript' },
    { name: 'perplexity', logo: '❋ perplexity' },
    { name: 'SUPERPEER', logo: 'SUPER PEER' },
    { name: 'monzo', logo: 'monzo' },
    { name: 'Raycast', logo: '🔍 Raycast' },
    { name: 'Retool', logo: '⚡ Retool' },
    { name: 'MERCURY', logo: '◉ MERCURY' },
    { name: 'ramp', logo: 'ramp ↗' },
    { name: 'OpenAI', logo: '⊙ OpenAI' },
    { name: 'scale', logo: 'scale' },
    { name: 'BOOM', logo: '❋ BOOM' },
    { name: 'Cash App', logo: '$ Cash App' },
    { name: 'Vercel', logo: '▲ Vercel' }
  ];

  const customerTestimonials = [
    {
      name: 'Sarah Johnson',
      company: 'CURSOR',
      role: 'CTO',
      testimonial: 'This platform transformed our data analytics capabilities completely.',
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Chen',
      company: 'Brex',
      role: 'Head of Finance',
      testimonial: 'The real-time reporting features are absolutely game-changing.',
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      company: 'remote',
      role: 'Operations Director',
      testimonial: 'Seamless integration with all our existing tools and workflows.',
      avatar: '👩‍💻'
    },
    {
      name: 'David Kim',
      company: 'ARC',
      role: 'VP of Engineering',
      testimonial: 'The AI insights help us make better decisions faster than ever.',
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Wang',
      company: 'runway',
      role: 'Product Manager',
      testimonial: 'Our team productivity increased by 40% since implementing this.',
      avatar: '👩‍🔬'
    },
    {
      name: 'Alex Thompson',
      company: 'descript',
      role: 'Data Scientist',
      testimonial: 'The most intuitive analytics platform we have ever used.',
      avatar: '👨‍🔬'
    }
  ];

  return (
    <section id="partners" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Trusted by Leading Companies
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
            Join thousands of companies reducing their carbon footprint
          </p>
          <Button 
            onClick={() => setShowCustomers(!showCustomers)}
            className={`px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {showCustomers ? 'Show Company Logos' : 'Meet our customers'} →
          </Button>
        </div>

        <div className="relative overflow-hidden">
          {/* Company Logos View */}
          <div className={`transition-all duration-700 transform ${
            showCustomers ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {logos.map((company, index) => (
                <div
                  key={company.name}
                  className={`flex items-center justify-center p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fade-in 0.6s ease-out forwards'
                  }}
                >
                  <span className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {company.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Testimonials View */}
          <div className={`absolute inset-0 transition-all duration-700 transform ${
            showCustomers ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customerTestimonials.map((customer, index) => (
                <Card 
                  key={customer.name}
                  className={`transition-all duration-500 hover:scale-105 ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: showCustomers ? 'fade-in 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl">{customer.avatar}</div>
                      <div>
                        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {customer.name}
                        </h3>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {customer.role} at {customer.company}
                        </p>
                      </div>
                    </div>
                    <p className={`text-sm italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      "{customer.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
