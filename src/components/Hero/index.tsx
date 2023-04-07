const Hero = () => {
  return (
    <section className="bg-black">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-12 max-w-4xl mx-auto text-center">
          <p className="text-[22px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#f7d486] to-[#f27a7d]">
            Freelancer Directory
          </p>
          <h1 className="text-6xl text-white font-bold mx-auto md:text-[6.5rem]">
            Find a superstar freelance creative.
          </h1>
          <div className="items-center justify-center py-8 gap-x-3 space-y-6 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-4 px-10 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-[2rem] shadow-lg hover:shadow-none"
            >
              Browse Creatives
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };

//text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]
// linear-gradient(90deg, hsla(141, 81%, 87%, 1) 0%, hsla(41, 88%, 75%, 1) 50%, hsla(358, 82%, 71%, 1) 100%); #f7d486 #c5f9d7 #f27a7d