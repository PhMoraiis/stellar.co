'use client'

import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionClone from './components/SectionClone';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import SlideSection from './components/SlideSection';
import BelowText from './components/BelowText';
import SectionMovie from './components/SectionMovie';

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Simule a conclusão da animação após 6 segundos
    setTimeout(() => {
      setAnimationComplete(true);
    }, 6000); // 6 segundos
  }, []);

  return (
    <div>
      <div className="bg-[#f8f8ff]">
        <Hero />
      </div>
      {animationComplete && (
        <div className='bg-[#010101]'>
          <BelowText />
          <Section />
          <SectionMovie />
          <SlideSection />
          <SectionClone />
          <PreFooter />
          <Footer />
        </div>
      )}
    </div>
  );
};
