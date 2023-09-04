import Image from "next/image"
import ButtonVar from "../Button/ButtonVar"

const BelowHero = () => {
    return (
        <div className="py-8 lg:pb-28 magicpattern">
            <div className="flex flex-col justify-between items-center mx-auto pb-8 lg:flex-row lg:mx-4 lg:pb-56">
                <div className="text-white text-7xl mb-12 font-geometosRg text-start lg:text-[7rem]">
                    <h1>We made</h1>
                    <h2>better email app.</h2>
                </div>
                <div className="py-8 flex flex-col items-end w-[95vw] lg:w-[30vw]">
                    <p className="font-coolveticaLt text-xl text-right text-white -mb-4 lg:text-xl lg:-mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet</p>
                    <ButtonVar href="https://www.instagram.com/stellar.ti/" title="Fale Conosco" text="white" bg="black" />
                </div>
            </div>
            <div className="py-12 lg:w-screen lg:flex lg:items-center lg:justify-center">
                <Image className="h-[90vh] w-full object-cover lg:mx-2 lg:w-[95vw] lg:object-top rounded-xl" src="/images/Essenseg.png" alt="" width={1280} height={784} />
            </div>
        </div>
    )
}

export default BelowHero