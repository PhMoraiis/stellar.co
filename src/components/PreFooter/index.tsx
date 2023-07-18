const PreFooter = () => {
  const containerClasses =
    "max-w-screen-[1640px] mx-auto md:px-8 py-10 lg:py-[12rem] backPreFooter";
  const titleClasses =
    "text-5xl lg:text-[7rem] text-white text-center flex justify-center items-center pt-72 font-coolveticaRg mx-auto md:text-[6.5rem]";
  const buttonClasses =
    "block py-[0.8rem] px-8 lg:px-20 lg:py-[1rem] text-white text-xl mt-2 font-coolveticaLt bg-[#1aa8d7] rounded-full";

  return (
    <div className={containerClasses}>
        <div className={titleClasses}>
          <h1>Alcance as estrelas.</h1>
        </div>
        <div className="flex items-center justify-center py-6 sm:space-y-0">
          <a href="" className={buttonClasses}>
            Descubra Mais
          </a>
        </div>
      </div>
  );
};

export default PreFooter;
