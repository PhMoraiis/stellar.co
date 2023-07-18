const Section = () => (
  <section className="py-[12rem]">
    <div className="max-w-screen-[1640px] mx-auto md:px-8">
      <div className="grid grid-cols-4 max-w-full sm:px-4 md:px-0 lg:flex lg:justify-center">
        <div className="flex items-center justify-center sm:mb-10 lg:block">
          <video
            className="max-w-2xl h-auto mx-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="./movies/231981044_226614866009546_642779584055189382_n.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-col justify-center px-4 space-y-8 sm:px-0 md:mt-0 lg:max-w-2xl">
          <h3 className="paragraph font-coolveticaRg text-[1.6rem]">
            Advanced Filtering
          </h3>
          <p className="text-white text-4xl font-coolveticaRg sm:text-7xl">
            Find the perfect person for the job.
          </p>
          <p className="mt-4 text-gray-400 text-[1.5rem] font-coolveticaLt">
            Most platforms force you to wade through thousands of profiles to
            find diamonds in the rough. We make it easy to discover and hire
            the best within just minutes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
