const Hero = () => {
  return (
    <section className="py-[3rem]">
      <div className="max-w-screen-[1640px] mx-auto px-4 gap-12 text-gray-600 md:px-8">
        <div className="space-y-10 py-12 lg:py-26 max-w-4xl mx-auto text-center">
          <p className="text-[24px] lg:text-[32px] font-coolveticaLt paragraph sm:mt-6">
            Tecnologia e Inovação
          </p>
          <h1 className="text-6xl lg:text-9xl text-white font-coolveticaRg mx-auto md:text-[8rem]">
            Venha brilhar no nosso <span className="textsGradient">universo.</span>
          </h1>
          <div className="items-center justify-center py-4 gap-x-3 space-y-6 sm:flex sm:space-y-0">
            <a
              href=""
              className="block py-[0.8rem] lg:py-4 lg:text-2xl px-20 text-white text-xl mt-2 font-coolveticaLt bg-[#1aa8d7] rounded-full"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;