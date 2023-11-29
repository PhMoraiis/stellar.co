import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import AnimatedLink from '../AnimatedLink'
import { IMiddleSectionProps } from './type'

const MiddleSection = ({ title, description, linkTitle, linkPath, moviePath }: IMiddleSectionProps) => {
  return (
    <div className="py-12 lg:py-24 mx-auto">
      <div className="mx-auto px-4 lg:mx-28">
        <div className="flex flex-col justify-center items-center px-4 space-y-2 sm:px-0 md:mt-0 lg:justify-center text-center lg:text-center">
          <h1 className="paragraph font-coolveticaRg lg:text-7xl text-5xl md:text-6xl pb-4">{title}</h1>
          <span className="text-gray-400 text-xl leading-9 font-coolveticaLt md:max-w-xl lg:max-w-2xl lg:text-2xl">{description}</span>
          <Link href={linkPath} className="text-[#448DF0] text-2xl flex items-center py-4">
            <AnimatedLink title={linkTitle} /> 
            <IoIosArrowForward size={20} className="mt-2 text-[#448DF0] hover:scale-110 duration-200 ease-in-out" />
          </Link>
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
              <source src={moviePath} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection