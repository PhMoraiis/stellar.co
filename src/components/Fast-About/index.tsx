import { CloverIcon, PlanetIcon } from "@phosphor-icons/react/ssr";

const FastAbout = () => {
  return (
    <div className="py-16 px-4 md:py-36 bg-secondaryds">
      <div className="max-w-7xl mx-auto flex flex-col space-y-42">
        <div className="text-left max-w-5xl gap-6 flex flex-col">
          <h4 className="text-lg font-medium uppercase mb-4 flex gap-2 items-center">
            <PlanetIcon className="size-6" /> Por que nós existimos
          </h4>
          <h2 className="text-4xl md:text-6xl font-movatif-regular">
            Reconhecemos uma lacuna na indústria criativa: Pequenas empresas
            frequentemente têm dificuldade em encontrar soluções de design de
            alta qualidade, porém acessíveis. É por isso que existimos.
          </h2>
        </div>
        <div className="flex justify-between flex-col md:flex-row lg:flex-row gap-12">
          <div className="flex items-center justify-start space-x-4">
            <CloverIcon className="size-44 text-[#BA6139]" />
            <CloverIcon className="size-44 text-[#BA6139]" />
          </div>
          <div className="max-w-lg">
            <p className="font-normal text-xl">
              Oferecemos um conjunto selecionado de serviços de design,
              especialmente elaborados para pequenos empresários. Do web design
              à identidade visual, simplificamos a construção de uma presença
              online sólida sem nenhum custo adicional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastAbout;
