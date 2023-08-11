import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionClone from './components/SectionClone';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Section />
      <SectionClone />
      <PreFooter />
      <Footer />
    </div>
  );
};