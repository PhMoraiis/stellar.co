import { IExtremitySectionProps } from './type'

const ExtremitySection = ({ title, subtitle, description, moviePath }: IExtremitySectionProps) => (
  <section className="py-12 lg:py-[13rem] pt-24">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row-reverse lg:justify-between">
        <div className="flex flex-col justify-center px-4 space-y-8 sm:px-0 md:mt-0 lg:max-w-2xl lg:justify-start text-center lg:text-left">
          <h3 className="paragraph font-coolveticaRg lg:text-4xl text-5xl md:text-6xl">
            {title}
          </h3>
          <p className="text-gray-200 text-2xl leading-9 font-coolveticaRg md:text-5xl sm:text-7xl">
            {subtitle}
          </p>
          <p className="mt-4 text-gray-400 text-sm sm:text-lg font-coolveticaLt md:mx-auto md:max-w-xl md:text-xl">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center mt-20 lg:mt-0 lg:w-3/4 lg:ml-10">
          <video className="max-w-full h-auto" autoPlay loop muted playsInline>
            <source
              src={moviePath}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </section>
)

export default ExtremitySection
