const LatestSection = () => (
  <section className="py-12 lg:py-[13rem]">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row-reverse lg:justify-between">
        <div className="flex flex-col justify-center px-4 space-y-8 sm:px-0 md:mt-0 lg:max-w-2xl lg:justify-start text-center lg:text-left">
          <h3 className="paragraph font-coolveticaRg lg:text-4xl text-5xl md:text-6xl">
            Futuro Brilhante
          </h3>
          <p className="text-gray-200 text-2xl leading-9 font-coolveticaRg md:text-5xl lg:text-7xl">
            A inovação que você procura.
          </p>
          <p className="mt-4 text-gray-400 text-md sm:text-lg font-coolveticaLt md:mx-auto md:max-w-xl md:text-xl">
          Assim como um diamante é lapidado para brilhar, a tecnologia é polida para iluminar o futuro, revelando incríveis inovações que brilham com o potencial de transformar nossa sociedade, conectando pessoas, simplificando tarefas e ampliando horizontes.
          </p>
        </div>

        <div className="flex items-center justify-center mt-20 lg:mt-0 lg:w-3/4 lg:ml-10">
          <video className="max-w-full h-auto" autoPlay loop muted playsInline>
            <source
              src="./movies/pinterest-video48.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default LatestSection;
