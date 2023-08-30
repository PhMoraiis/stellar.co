import Link from "next/link";

const PreFooter = () => {
  const containerClasses =
    "mx-auto md:px-8 py-10 backPreFooter";
  const titleClasses =
    "text-5xl lg:text-[7rem] text-white text-center flex flex-col items-center pt-12 mt-20 lg:py-40 font-coolveticaRg md:text-[6.5rem]";
  const buttonClasses =
    "inline-block py-[0.8rem] px-8 lg:px-[4rem] lg:py-[1rem] lg:text-2xl text-white text-xl mt-2 font-coolveticaLt grayGradient rounded-full";

  return (
    <div className={containerClasses}>
      <div className={titleClasses}>
        <h1>Alcance as estrelas.</h1>
        <div className="flex items-center justify-center py-6 sm:space-y-0">
          <Link href="https://www.instagram.com/stellar.ti/" target="_blank" className={buttonClasses}>
            Descubra Mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
