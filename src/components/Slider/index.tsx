import React, { useState } from "react";

import { Essenseg } from "../Essenseg";
import { EssensegSection } from "../EssensegSection";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const [slides, setSlides] = useState([<Essenseg />, <EssensegSection />]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-screen-xl w-full m-auto py-16 px-4 relative">
      {slides[currentIndex]}
      {/* Left Arrow */}
      <div className="group-hover:block duration-1000 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 gradient text-white cursor-pointer">
        <IoIosArrowBack onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="group-hover:block duration-1000 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 gradient text-white cursor-pointer">
        <IoIosArrowForward onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export { Slider };
