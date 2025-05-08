<<<<<<< HEAD
import FastAbout from '@/components/Fast-About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FastAbout />
      <Stats />
      <Footer />
    </>
  )
}
=======
'use client'

import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionClone from '../components/SectionClone';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import SectionMovie from '../components/SectionMovie';
/* import SlideSection from './components/SlideSection';
import BelowText from './components/BelowText'; */

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
      <div className="bg-[#f8f8ff] overflow-hidden">
        <Hero />
      </div>
      {animationComplete && (
        <div className='bg-[#010101]'>
          {/* <BelowText /> */}
          <Section />
          <SectionMovie />
          {/* <SlideSection /> */}
          <SectionClone />
          <PreFooter />
          <Footer />
        </div>
      )}
    </div>
  );
};
>>>>>>> 1195f16999c15de8b2092f6f835d139e8244440a
