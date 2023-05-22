import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Section = () => {
  return (
    <section className="py-32 gradientBack">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block px-8">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="md:max-w-xl rounded-lg "
              alt=""
              width={600}
              height={600}
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="paragraph font-coolveticaBd">
              Professional services
            </h3>
            <p className="text-white text-3xl font-coolveticaRg sm:text-4xl">
              Build your SaaS solution with help from our experts
            </p>
            <p className="mt-3 text-gray-300 font-coolveticaLt">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum, sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium
            </p>
            <a
              href=""
              className="inline-flex gap-x-1 items-center paragraph font-coolveticaRg"
            >
              Learn more
              <AiOutlineArrowRight className="text-white hover" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Section };
