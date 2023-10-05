const SectionMovie = () => {
    return (
        <div className="py-12 lg:py-24 mx-auto">
            <div className="mx-auto px-4 lg:mx-28">
                <div className="flex flex-col justify-center items-center px-4 space-y-2 sm:px-0 md:mt-0 lg:justify-center text-center lg:text-center">
                    <h1 className="paragraph font-coolveticaRg lg:text-7xl text-6xl md:text-3xl">Temos a melhor solução</h1>
                    <span className="text-gray-200 text-[1.5rem] leading-9 font-coolveticaLt lg:text-2xl lg:w-3/4">Convertemos nossas ideias em grandes soluções para que nossos clientes tenham uma maior flexibilidade e eficiência em seus serviços.</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center py-6 mx-4 rounded-full lg:w-2/4 -lg:mb-10">
                        <video
                            className="w-[110%] object-cover rounded-xl"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/movies/third.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionMovie;