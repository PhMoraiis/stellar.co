'use client'

import EarthVideo from "../EarthVideo";
import HeroText from "../HeroText";
import MapImages from "../MapImages";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroText />
      <MapImages />
      <EarthVideo />
    </>
  );
}

export default Home;