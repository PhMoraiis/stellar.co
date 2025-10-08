import FAQ from '@/components/FAQ'
import FastAbout from '@/components/Fast-About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PreFooter from '@/components/PreFooter'
import Pricing from '@/components/Pricing'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FastAbout />
      <Stats />
      <Pricing />
      <FAQ />
      <PreFooter />
      <Footer />
    </>
  )
}
