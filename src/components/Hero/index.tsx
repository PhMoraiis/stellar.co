const Hero = () => {
  return (
    <section className="py-[8rem]">
      <div className="max-w-screen-[1640px] mx-auto px-4 gap-12 text-gray-600 md:px-8 lg:py-20">
        <div className="space-y-10 max-w-4xl mx-auto text-center">
          <p className="text-[24px] font-coolveticaLt paragraph sm:mt-6">
            Tecnologia e Inovação
          </p>
          <h1 className="text-6xl text-white font-coolveticaRg mx-auto md:text-[8rem]">
            Venha brilhar no nosso <span className="textsGradient">universo.</span>
          </h1>
          <div className="items-center justify-center py-4 gap-x-3 space-y-6 sm:flex sm:space-y-0">
            <a
              href=""
              className="block py-4 px-24 text-white text-[1.3rem] mt-2 font-coolveticaLt bg-[#1aa8d7] rounded-full"
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