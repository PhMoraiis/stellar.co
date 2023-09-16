import Image from "next/image"
import BelowText from "../BelowText"

const BelowHero = () => {
    return (
        <>
            <BelowText />
            <div className="py-8 pt-40 lg:pt-12 lg:pb-28">
                <div className="py-12 lg:flex lg:items-center lg:justify-center">
                    <Image className="lg:w-[95vw] lg:object-top rounded-xl hidden lg:flex" src="/images/Essenseg.png" alt="" width={1280} height={784} />
                    <Image className="h-[90vh] w-full object-cover rounded-xl lg:hidden" src="/images/Essenseg.png" alt="" width={1280} height={784} />
                </div>
            </div>
        </>
    )
}

export default BelowHero