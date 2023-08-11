'use client'

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionClone from './components/SectionClone';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import HomeTest from './components/HomeTest';

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <HomeTest />
      </div>
      <div className='bg-black'>
        <Header />
        <Hero />
        <Section />
        <SectionClone />
        <PreFooter />
        <Footer />
      </div>
    </div>
  );
};