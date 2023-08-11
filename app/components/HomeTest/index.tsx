'use client'

import BoatVideo from "../BoatVideo";
import HeroText from "../HeroText";
import MapImages from "../MapImages";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroText />
      <MapImages />
      <BoatVideo />
    </>
  );
}

export default Home;