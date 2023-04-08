const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-4 max-w-4xl mx-auto text-center">
          <p className="text-[24px] font-medium paragraph">
            Tecnologia e Inovação
          </p>
          <h1 className="text-6xl text-white font-bold mx-auto md:text-[6.5rem]">
            Venha brilhar no nosso universo.
          </h1>
          <div className="items-center justify-center py-4 gap-x-3 space-y-6 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-4 px-14 text-white font-medium gradient rounded-[3rem]"
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
