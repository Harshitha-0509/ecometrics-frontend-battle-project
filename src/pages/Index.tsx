
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
import ConnectionSection from '@/components/ConnectionSection';
import HappySellersSection from '@/components/HappySellersSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import BackgroundRipples from '@/components/BackgroundRipples';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <BackgroundRipples isDark={isDark} />
      <div className="relative z-10">
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />
        <Dashboard isDark={isDark} />
        <CarbonMetrics isDark={isDark} />
        <BSSCapabilities isDark={isDark} />
        <AnalyticsShowcase isDark={isDark} />
        <ProgressSection isDark={isDark} />
        <ConnectionSection isDark={isDark} />
        <HappySellersSection isDark={isDark} />
        <PricingSection isDark={isDark} />
        <ProductShowcase isDark={isDark} />
        <BrandKits isDark={isDark} />
        <AboutSection isDark={isDark} />
        <LusionSection isDark={isDark} />
        <CompanyLogos isDark={isDark} />
      </div>
    </div>
  );
};

export default Index;
