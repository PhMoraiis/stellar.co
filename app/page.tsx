'use client'

import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionClone from './components/SectionClone';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import SlideSection from './components/SlideSection';

export default function Home() {
  return (
    <div>
      <div className="bg-[#f8f8ff]">
        <Hero />
      </div>
      <div className='bg-black'>
        <Section />
        <SlideSection />
        <SectionClone />
        <PreFooter />
        <Footer />
      </div>
    </div>
  );
};