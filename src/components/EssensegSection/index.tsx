import Image from "next/image";
import EssensegLogo from "./../../../public/images/EssensegLogo.png";
import EssensegSite from "./../../../public/images/Essenseg.png";

const EssensegSection = () => {
  return (
    <section className="py-36">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="pb-6">
            <Image src={EssensegLogo} alt="" width={100} className="mx-auto" />
          </div>
          <figure>
            <blockquote>
              <p className="text-white text-xl font-coolveticaRg sm:text-2xl">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                et est hendrerit, porta nunc vitae, gravida justo. Nunc
                fermentum magna lorem, euismod volutpat arcu volutpat et.“
              </p>
            </blockquote>
            <div className="mt-6">
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-16 h-16 mx-auto rounded-full"
              />
              <div className="mt-3">
                <span className="block paragraph font-coolveticaRg">
                  Cristiano Morais
                </span>
                <span className="block text-white font-coolveticaLt text-sm mt-0.5">
                    CEO, Essenseg
                </span>
              </div>
            </div>
          </figure>
          <div className="mt-14">
            <Image
              src={EssensegSite}
              width={1500}
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { EssensegSection };
