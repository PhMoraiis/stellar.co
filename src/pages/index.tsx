import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionClone from '../components/SectionClone';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';

const Home = () => {
  const sections = [
    <Header />,
    <Hero />,
    <Section />,
    <SectionClone />,
    <PreFooter />,
    <Footer />,
  ];

  return (
    <div className="bg-black">
      {sections}
    </div>
  );
};

export default Home;