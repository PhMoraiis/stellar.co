import { Sparkle, Star } from 'lucide-react'

const FastAbout = () => {
  return (
    <div className="py-16 px-4 md:py-36 bg-secondaryds">
      <div className="max-w-7xl mx-auto flex flex-col space-y-42">
        <div className="text-left max-w-5xl gap-6 flex flex-col">
          <h4 className="text-lg font-medium uppercase mb-4 flex gap-2 items-center">
            <Sparkle /> Por que nós existimos
          </h4>
          <h2 className="text-4xl md:text-6xl font-coolvetica">
            We recognized a gap in the creative industry--small businesses often
            struggle to find high-quality, yet affordable, design solutions.
            That's why we exist.
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center justify-start space-x-4">
            <Star className="size-42 text-[#BA6139]" />
            <Star className="size-42 text-[#BA6139]" />
          </div>
          <div className="max-w-lg">
            <p className='font-movatif-regular text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ipsa vero a nulla et quibusdam doloribus delectus
              eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsam tenetur aspernatur eveniet. Ea nesciunt asperiores, iste eos
              accusantium voluptas harum optio quo? Veritatis ab, praesentium
              eos quia ipsam voluptatum tempora!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FastAbout
