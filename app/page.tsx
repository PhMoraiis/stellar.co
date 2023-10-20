'use client'

import React, { useState, useEffect } from 'react';

import Hero from '@/components/Hero';
import PrimarySection from '@/components/PrimarySection';
import DevelopSection from '@/components/DevelopSection';
import DesignSection from '@/components/DesignSection';
import LatestSection from '@/components/LatestSection';
import PreFooter from '@/components/PreFooter';
import Footer from '@/components/Footer';
import BrandingSection from '@/components/BrandingSection';

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Simule a conclusão da animação após 6 segundos
    setTimeout(() => {
      setAnimationComplete(true);
    }, 7000); // 7 segundos
  }, []);

  return (
    <div>
      <div className="bg-[#f8f8ff] overflow-hidden">
        <Hero />
      </div>
      {animationComplete && (
        <div className='bg-[#010101]'>
          <PrimarySection />
          <DevelopSection />
          <DesignSection />
          <BrandingSection />
          <LatestSection />
          <PreFooter />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;