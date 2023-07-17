const PreFooter = () => {
  const containerClasses = "max-w-screen-full mx-auto md:px-8 lg:py-[13rem] backPreFooter";
  const titleClasses = "text-4xl text-white text-center font-coolveticaRg mx-auto md:text-[6.5rem] mt-24";
  const buttonClasses = "block py-4 px-20 text-white text-[1.3rem] mt-2 font-coolveticaLt bg-[#1aa8d7] rounded-full";

  return (
    <div className={containerClasses}>
      <div className={titleClasses}>
        <h1>Alcance as estrelas.</h1>
      </div>
      <div className="flex items-center justify-center py-4 gap-x-3 space-y-6 sm:space-y-0 mt-12">
        <a href="" className={buttonClasses}>
          Descubra Mais
        </a>
      </div>
    </div>
  );
};

export default PreFooter;
