const NumbersSection = () => {
    return (
        <section className="py-20 lg:py-[13rem] pt-24" id="reliability">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col lg:grid-cols-2 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center px-4 space-y-8 sm:px-0 md:mt-0 lg:max-w-xl lg:justify-start text-center lg:text-left text-white">
                        <h2 className="paragraph font-coolveticaRg lg:text-6xl text-5xl md:text-3xl">Resiliência</h2>
                        <div className="flex gap-20 py-8 flex-col lg:flex-col md:flex-row lg:py-14">
                            <div className="">
                                <div className="border-b-[1px] text-left py-2 text-xl">01</div>
                                <h1 className="pt-6 text-left text-xl">We locate our infrastructure in various data centers across Europe in order to ensure redundancy and high uptime.</h1>
                            </div>
                            <div className="">
                                <div className="border-b-[1px] text-left py-2 text-xl">02</div>
                                <h1 className="pt-6 text-left text-xl"> We use various monitoring and alerting tools to monitor the infrastructure and respond to any issues.</h1>
                            </div>
                            <div className="">
                                <div className="border-b-[1px] text-left py-2 text-xl">02</div>
                                <h1 className="pt-6 text-left text-xl"> We use various monitoring and alerting tools to monitor the infrastructure and respond to any issues.</h1>
                            </div>
                            <div className="">
                                <div className="border-b-[1px] text-left py-2 text-xl">02</div>
                                <h1 className="pt-6 text-left text-xl"> We use various monitoring and alerting tools to monitor the infrastructure and respond to any issues.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-20 lg:mt-0 lg:w-[110%] lg:ml-10">
                        <video className="max-w-full h-auto rounded-full" autoPlay loop muted playsInline>
                            <source
                                src="/movies/first.webm"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NumbersSection;
