import React, { useState, useEffect } from "react";
import { Essenseg } from "../Essenseg";
import { EssensegSection } from "../EssensegSection";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timeout = setTimeout(nextSlide, 7000); // Slide irá mudar automaticamente após 7 segundos

    return () => {
      clearTimeout(timeout); // Limpa o timeout quando o componente é desmontado
    };
  }, [currentIndex]);

  return (
    <div className="max-w-screen-xl w-full m-auto py-6 px-4 relative">
      {slides[currentIndex]}
      {/* Left Arrow */}
      <div className="group-hover:block duration-1000 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 grayGradient text-white cursor-pointer">
        <IoIosArrowBack onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="group-hover:block duration-1000 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 grayGradient text-white cursor-pointer">
        <IoIosArrowForward onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export { Slider };
