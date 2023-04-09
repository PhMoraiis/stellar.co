const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-[5rem] gap-12 text-gray-600 md:px-8 lg:py-32">
        <div className="space-y-10 max-w-4xl mx-auto text-center">
          <p className="text-[24px] font-coolveticaRg paragraph">
            Tecnologia e Inovação
          </p>
          <h1 className="text-6xl text-white font-coolveticaRg mx-auto md:text-[6.5rem]">
            Venha brilhar no nosso universo.
          </h1>
          <div className="items-center justify-center py-4 gap-x-3 space-y-6 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-4 px-14 text-white text-[1.3rem] mt-2 font-coolveticaRg gradient rounded-[3rem]"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };