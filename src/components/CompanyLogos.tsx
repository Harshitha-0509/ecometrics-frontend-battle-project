
import React from 'react';

interface CompanyLogosProps {
  isDark: boolean;
}

const CompanyLogos = ({ isDark }: CompanyLogosProps) => {
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
          <button className={`px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}>
            Meet our customers →
          </button>
        </div>

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
    </section>
  );
};

export default CompanyLogos;
