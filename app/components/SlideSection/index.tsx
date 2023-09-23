import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";


const SlideSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRef = useRef(null);

    const videos = ["/movies/first.webm", "/movies/third.mp4", "/movies/third.mp4", "/movies/third.mp4"];
    const texts = [
        {
            title: "A inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procura.",
        },
        {
            title: "A inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procura.",
        },
        {
            title: "A inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procura.",
        },
        {
            title: "A inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procuraA inovação que você procura.",
        }
    ]

    const changeSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        // Atualize o vídeo quando o slide atual mudar
        if (videoRef.current) {
            (videoRef.current as HTMLVideoElement).load();
        }
    }, [currentSlide, videoRef]);


    // Função para animar elementos com GSAP
    const animateElements = () => {
        const tl = gsap.timeline();

        // Animação para o vídeo
        tl.to(videoRef.current, { opacity: 0, duration: 0.5 })
            .call(() => {
                if (videoRef.current) {
                    (videoRef.current as HTMLVideoElement).load();
                    (videoRef.current as HTMLVideoElement).play();
                }
            })

            .to(videoRef.current, { opacity: 1, duration: 0.5 });

        // Animação para os textos
        texts.forEach((text, index) => {
            const textElement = document.getElementById(`text-${index}`);
            tl.to(textElement, { opacity: 0, y: -20, duration: 0.5 }, `-=${0.5}`);
            tl.to(textElement, { opacity: 1, y: 0, duration: 0.5 }, `-=${0.2}`);
        });

        // Inicie a animação
        tl.play();
    };

    // Chame a função de animação sempre que o slide mudar
    useEffect(() => {
        animateElements();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide]);

    return (
        <div className="py-12 lg:py-28 mx-auto">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col justify-center items-center px-4 space-y-2 sm:px-0 md:mt-0 lg:justify-center text-center lg:text-center">
                    <h1 className="paragraph font-coolveticaRg lg:text-7xl text-2xl md:text-3xl">Encontre a melhor solução</h1>
                    <span className="text-gray-400 text-[2rem] leading-9 font-coolveticaLt lg:text-2xl lg:w-3/4">Convertemos nossas ideias em grandes soluções para que nossos clientes tenham uma maior flexibilidade e eficiência em seus serviços.</span>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-auto lg:gap-x-12 lg:pt-14">
                        <div className="flex items-center justify-center py-6 mx-4 lg:w-full">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ opacity: 0 }} // Inicie com opacidade 0
                            >
                                <source src={videos[currentSlide]} type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex items-center justify-center text-white font-coolveticaRg text-left lg:text-lg">
                            <ul className="flex flex-col justify-start items-start gap-y-4 lg:gap-y-12">
                                {texts.map((text, index) => (
                                    <li
                                        id={`text-${index}`} // Adicione um ID único para cada elemento de texto
                                        className={`flex items-start justify-center gap-x-4 ${currentSlide === index
                                            ? "text-white"
                                            : "text-gray-500 hover:text-gray-600 duration-300 ease-in"
                                            } cursor-pointer`}
                                        key={index}
                                        onClick={() => changeSlide(index)}
                                        style={{ opacity: 0, transform: "translateY(-20px)" }} // Inicie com opacidade 0 e posição y de -20px
                                    >
                                        <span
                                            className={`border-[2px] bg-gray-400 py-[12px] px-[10px] rounded-full hover:bg-gray-600 duration-300 ease-in cursor-pointer ${currentSlide === index ? "border-white" : ""
                                                }`}
                                        ></span>
                                        {text.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideSection;