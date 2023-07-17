import React from 'react';
import Image from 'next/image';

const SectionClone = () => {
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="grid items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
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
          <div className="flex-1 sm:mb-10 lg:block px-8">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="md:max-w-xl rounded-lg"
              alt=""
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionClone;