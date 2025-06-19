
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductShowcaseProps {
  isDark: boolean;
}

const ProductShowcase = ({ isDark }: ProductShowcaseProps) => {
  const products = [
    {
      id: 1,
      title: 'Skincare Collection',
      isNew: true,
      description: 'Premium botanical skincare essentials',
      image: '/lovable-uploads/bde2bb90-f4bd-4f17-b734-0a973da1e3c6.png'
    },
    {
      id: 2,
      title: 'Hair Care Bundle',
      isNew: true,
      description: 'Professional hair treatment series',
      image: '/lovable-uploads/d6abb6c1-693d-4a1f-9d06-a1a1b9ee0aca.png'
    }
  ];

  return (
    <section id="products" className={`py-20 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Products
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Discover our latest sustainable product collections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white text-black px-3 py-1 text-sm font-medium transform -rotate-12 shadow-lg">
                        NEW
                      </span>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {product.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {product.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      isDark ? 'border-gray-700 text-white hover:bg-white hover:text-black' : ''
                    }`}
                  >
                    ADD TO BAG +
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
