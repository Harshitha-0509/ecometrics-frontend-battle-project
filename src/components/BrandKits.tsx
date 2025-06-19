
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BrandKitsProps {
  isDark: boolean;
}

const BrandKits = ({ isDark }: BrandKitsProps) => {
  const [selectedBrand, setSelectedBrand] = useState('The Agency');

  const brands = [
    { name: 'ECorp', color: 'bg-emerald-500', selected: false },
    { name: 'ICorp', color: 'bg-orange-500', selected: false },
    { name: 'The Agency', color: 'bg-red-500', selected: true }
  ];

  return (
    <section id="brands" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Brand Kits
          </h2>
        </div>

        <Card className={`${isDark ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'} p-6`}>
          <CardContent>
            <div className="space-y-4">
              {brands.map((brand, index) => (
                <div 
                  key={brand.name}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:scale-102 cursor-pointer ${
                    brand.selected 
                      ? (isDark ? 'bg-blue-900/30 border border-blue-500' : 'bg-blue-50 border border-blue-300')
                      : (isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50')
                  }`}
                  onClick={() => setSelectedBrand(brand.name)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        checked={brand.selected || selectedBrand === brand.name}
                        onChange={() => setSelectedBrand(brand.name)}
                        className="w-4 h-4"
                      />
                      <div className={`w-8 h-8 rounded-full ${brand.color}`}></div>
                    </div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {brand.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12l-6-6h12l-6 6z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BrandKits;
