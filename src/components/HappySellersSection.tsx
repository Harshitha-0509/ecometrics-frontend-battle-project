
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface HappySellersProps {
  isDark: boolean;
}

const HappySellersSection = ({ isDark }: HappySellersProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "I manage listings across several Amazon marketplaces, and it used to be a bit chaotic. Since switching to Amazgo, it's felt much more structured. I rely on the analytics to spot which products are underperforming and where orders are trending. It helps me plan smarter. The feedback request feature also gives me peace of mind—it's compliant, automated, and saves hours every week. It's all made things smoother, especially across borders.",
      author: "DTW",
      role: "Enterprise Amazon Seller"
    },
    {
      text: "I run a small Amazon store on the side, and honestly, I don't have time to check performance every day. Amazgo shows me what's happening without needing to dig through reports. I really like how it sends out follow-up requests for feedback automatically, because that's something I always used to forget. It makes a difference knowing that's taken care of and still within Amazon's rules. It just helps me run my store more confidently.",
      author: "Sophie Williams",
      role: "of Amazon Seller"
    },
    {
      text: "I used to remind myself to message buyers manually—but let's face it, I'd forget half the time. Amazgo took that off my list. The review request system runs in the background, and I can focus on orders and stock. I especially like the dashboard—I check it daily. It's straightforward and gives me what I need to know fast, like what's selling well or when I'm close to needing a restock. Makes decision-making less stressful.",
      author: "Daniel Cortez",
      role: "Canadian Amazon Seller"
    }
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="happy-sellers" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-xl opacity-30"></div>
            <h2 className={`relative text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} px-8 py-4`}>
              Happy Sellers
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`transition-all duration-500 transform ${
                index === currentTestimonial ? 'scale-105 z-10' : 'scale-95 opacity-75'
              } ${isDark ? 'bg-purple-900/50 border-purple-700' : 'bg-purple-100 border-purple-200'}`}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <p className={`text-sm italic mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{testimonial.text}"
                </p>
                <div>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.author}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HappySellersSection;
