const Section = () => (
  <section className="py-12 lg:py-28">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row-reverse lg:justify-between">
        <div className="flex flex-col justify-center px-4 space-y-8 sm:px-0 md:mt-0 lg:max-w-2xl lg:justify-start text-center lg:text-left">
          <h3 className="paragraph font-coolveticaRg lg:text-3xl text-2xl">
            Advanced Filtering
          </h3>
          <p className="text-white text-[2rem] leading-9 font-coolveticaRg sm:text-7xl">
            Find the perfect person for the job.
          </p>
          <p className="mt-4 text-gray-400 text-lg sm:text-lg font-coolveticaLt">
            Most platforms force you to wade through thousands of profiles to
            find diamonds in the rough. We make it easy to discover and hire the
            best within just minutes.
          </p>
        </div>

        <div className="flex items-center justify-center mt-20 lg:mt-0 lg:w-3/4 lg:ml-10">
          <video className="max-w-full h-auto" autoPlay loop muted playsInline>
            <source
              src="./movies/231981044_226614866009546_642779584055189382_n.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
