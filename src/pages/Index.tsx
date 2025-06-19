
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
import ConnectionSection from '@/components/ConnectionSection';
import HappySellersSection from '@/components/HappySellersSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import BackgroundRipples from '@/components/BackgroundRipples';
import ScrollAnimations from '@/components/ScrollAnimations';
import CreativeBackground from '@/components/CreativeBackground';
import AnimatedSection from '@/components/AnimatedSection';

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
    <div className={`min-h-screen transition-all duration-500 relative overflow-x-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
        : 'bg-gradient-to-br from-white via-gray-50 to-blue-50'
    }`}>
      <CreativeBackground isDark={isDark} />
      <ScrollAnimations />
      <BackgroundRipples isDark={isDark} />
      
      <div className="relative z-10">
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />
        
        <AnimatedSection animation="fadeUp">
          <Dashboard isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeLeft" delay={200}>
          <CarbonMetrics isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeRight" delay={300}>
          <BSSCapabilities isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="scale" delay={400}>
          <AnalyticsShowcase isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={500}>
          <ProgressSection isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeLeft" delay={600}>
          <ConnectionSection isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeRight" delay={700}>
          <HappySellersSection isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="scale" delay={800}>
          <PricingSection isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={900}>
          <ProductShowcase isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeLeft" delay={1000}>
          <BrandKits isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeRight" delay={1100}>
          <AboutSection isDark={isDark} />
        </AnimatedSection>
        
        <AnimatedSection animation="scale" delay={1200}>
          <CompanyLogos isDark={isDark} />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Index;
