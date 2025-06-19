
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Loader from '@/components/Loader';
import Dashboard from '@/components/Dashboard';
import CarbonMetrics from '@/components/CarbonMetrics';
import BSSCapabilities from '@/components/BSSCapabilities';
import AnalyticsShowcase from '@/components/AnalyticsShowcase';
import ProductShowcase from '@/components/ProductShowcase';
import BrandKits from '@/components/BrandKits';
import CompanyLogos from '@/components/CompanyLogos';
import ProgressSection from '@/components/ProgressSection';
import LusionSection from '@/components/LusionSection';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Increased to 3 seconds to show the enhanced loader

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Dashboard isDark={isDark} />
      <CarbonMetrics isDark={isDark} />
      <BSSCapabilities isDark={isDark} />
      <AnalyticsShowcase isDark={isDark} />
      <ProgressSection isDark={isDark} />
      <ProductShowcase isDark={isDark} />
      <BrandKits isDark={isDark} />
      <LusionSection isDark={isDark} />
      <CompanyLogos isDark={isDark} />
    </div>
  );
};

export default Index;
