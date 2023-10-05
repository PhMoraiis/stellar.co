'use client'

import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionClone from '../components/SectionClone';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import SectionMovie from '../components/SectionMovie';
import NumbersSection from '../components/NumbersSection';
import SlideSection from '../components/SlideSection';

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
          <Section />
          <NumbersSection />
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

export default Home;