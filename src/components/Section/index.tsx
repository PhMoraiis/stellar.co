const Section = () => (
  <section className="py-32">
    <div className="max-w-screen-xl mx-auto md:px-8">
      <div className="grid grid-cols-1 gap-x-12 sm:px-4 md:px-0 lg:flex">
        <div className="flex sm:mb-10 lg:block px-8">
          <video
            className="max-w-lg h-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="./movies/635b44258f935158cd960e72_stellar-filter2(1)-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="max-w-xl px-4 space-y-6 mt-6 sm:px-0 md:mt-0 lg:max-w-4xl">
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
