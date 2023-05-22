const PreFooter = () => {
  return (
    <div className="max-w-screen py-[5rem] md:px-8 lg:py-32 backPreFooter">
      <div className="text-4xl text-white text-center font-coolveticaRg mx-auto md:text-[6.5rem] mt-24">
        <h1>Reach for the stars.</h1>
      </div>
      <div className="items-center justify-center py-4 gap-x-3 space-y-6 sm:flex sm:space-y-0 mt-12">
        <a
          href="javascript:void(0)"
          className="block py-4 px-14 text-white text-[1.3rem] mt-2 font-coolveticaRg gradient rounded-[3rem]"
        >
          Saiba Mais
        </a>
      </div>
    </div>
  );
};

export { PreFooter };
