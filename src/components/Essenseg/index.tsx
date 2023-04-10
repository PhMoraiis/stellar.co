import Image from "next/image";
import EssensegSite from "./../../../public/images/Essenseg.png";

const Essenseg = () => {
  return (
    <section className="py-32 mt-[4rem] mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <figure>
            <blockquote>
              <p className="text-white text-xl font-coolveticaBd sm:text-2xl">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                et est hendrerit, porta nunc vitae, gravida justo. Nunc
                fermentum magna lorem, euismod volutpat arcu volutpat et.“
              </p>
            </blockquote>
            <div className="mt-6">
              <Image
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-16 h-16 mx-auto rounded-full"
                width={64}
                height={64}
                alt=""
              />
              <div className="mt-3">
                <span className="block paragraph font-coolveticaRg">
                  Robson Morais
                </span>
                <span className="block text-gray-300 font-coolveticaLt text-sm mt-0.5">
                    CEO, Essenseg
                </span>
              </div>
            </div>
          </figure>
          <div className="mt-14">
            <Image
              src={EssensegSite}
              width={1000}
              height={1000}
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Essenseg };
