import Button from "../Button";

const PreFooter = () => {
  return (
    <div className="mx-2 my-6 lg:mx-10 lg:my-12 md:mx-6 md:my-8 rounded-md py-14 lg:py-[10rem] md:py-[6rem] bg-preFooter">
      <div className="flex flex-col items-center">
        <h6 className="text-xl lg:text-2xl md:text-xl text-black font-geometosLt uppercase mb-8 lg:mb-12">Tem um projeto em mente?</h6>
        <h2 className="lg:text-[12rem] md:text-[5rem] md:leading-[5rem] xl:text-[9rem] xl:leading-[6rem] lg:leading-[10rem] font-coolveticaRg uppercase hidden lg:flex md:flex">Traga sua visão</h2>
        <h2 className="lg:text-[12rem] md:text-[5rem] md:leading-[3rem] xl:text-[9rem] xl:leading-[7rem] lg:leading-[8rem] font-coolveticaRg uppercase hidden lg:flex md:flex">Para a web!</h2>
        <span className="text-7xl leading-[3rem] font-coolveticaRg uppercase lg:hidden md:hidden">Traga</span>
        <span className="text-7xl leading-[4rem] font-coolveticaRg uppercase lg:hidden md:hidden">Sua</span>
        <span className="text-7xl leading-[4rem] font-coolveticaRg uppercase lg:hidden md:hidden">Visão</span>
        <span className="text-7xl leading-[3rem] font-coolveticaRg uppercase lg:hidden md:hidden">Para a</span>
        <span className="text-7xl leading-[4rem] font-coolveticaRg uppercase lg:hidden md:hidden">web!</span>
        <Button href="https://www.instagram.com/stellar.ti/" title="Fale Conosco" text="white" bg="black"  />
      </div>
    </div>
  );
};

export default PreFooter;
