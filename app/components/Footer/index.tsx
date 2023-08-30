import AnimatedLink from "../AnimatedLink";
import StarWhite from "../StarWhite";

import { FiArrowUpRight } from "react-icons/fi";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";


const Footer = () => {
  const pathname = usePathname();

  const renderFooterNavs = () => {
    const navItems = [
      { title: "home.", route: "/" },
      { title: "soluções.", route: "/solutions" },
      { title: "stellaris.", route: "/stellaris" },
      { title: "works.", route: "/works" },
      { title: "sobre.", route: "/about" },
      { title: "contato.", route: "/contact" },
    ];

    return (
      <ul className="text-gray-200 text-xl lg:text-2xl">
        {navItems.map((item) => (
          <li
            key={item.title}
            className={`flex flex-col gap-y-2 ${pathname.toString() === item.route ? "border-b-[1px] border-white inline-flex" : ""
              }`}
          >
            <Link href={item.route}>
              <AnimatedLink title={item.title} href={item.route} />
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderFooterSocials = () => {
    return (
      <ul className="text-gray-200 text-xl lg:text-2xl">
        <li className="flex flex-col gap-y-2">
          <div className="flex items-center">
            <AnimatedLink title={"x."} />
            <FiArrowUpRight className="hover:scale-125 duration-100 ease-in" />
          </div>
          <div className="flex items-center">
            <AnimatedLink title={"instagram."} />
            <FiArrowUpRight className="hover:scale-125 duration-100 ease-in" />
          </div>
          <div className="flex items-center">
            <AnimatedLink title={"linkedin."} />
            <FiArrowUpRight className="hover:scale-125 duration-100 ease-in" />
          </div>
        </li>
      </ul>
    );
  };

  const renderFooterLegals = () => {

    const navItemsLegals = [
      { title: "termos.", route: "/terms" },
      { title: "privacidade.", route: "/privacy" },
      { title: "cookies.", route: "/cookies" },
    ];

    return (
      <ul className="text-gray-200 text-xl lg:text-2xl mb-[2.7rem]">
        {navItemsLegals.map((item) => (
          <li
            key={item.title}
            className={`flex flex-col gap-y-2 ${pathname.toString() === item.route ? "border-b-[1px] border-white inline-block" : ""
              }`}
          >
            <Link href={item.route}>
              <AnimatedLink title={item.title} href={item.route} />
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="py-4 pb-6 lg:py-12 bg-[#171718] font-coolveticaLt">
      <div className="px-4 lg:px-20">
        <div className="lg:flex">
          <div className="flex-1 mb-16 lg:flex lg:items-start lg:justify-start lg:flex-col">
            <h1 className="text-[1.6rem] lg:text-[3rem] text-white font-coolveticaRg flex items-center">
              Relaxa. Nos guiamos você <StarWhite />
            </h1>
            <div className="text-white text-xl lg:text-2xl font-coolveticaLt border-b-[1px] border-white inline-block">
              <AnimatedLink href="https://www.instagram.com/stellar.ti/" target="_blank" title={"Descubra mais sobre nós."} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-12">
              <div className="pb-12">
                {renderFooterNavs()}
              </div>
              <div className="text-white text-xl pb-4 lg:ml-8">
                <h3 className="font-coolveticaEl text-gray-400 mb-1">©2023 Legal</h3>
                {renderFooterLegals()}
              </div>
            </div>
            {renderFooterSocials()}
          </div>
        </div>
        <div className="flex flex-row justify-center gap-2 mt-10 py-2 mx-auto w-[2rem] lg:w-full lg:justify-between">
          <Image className="hover:scale-110 duration-100 ease-in-out" src="/images/S.svg" width={200} height={220} alt="Stellar" />
          <Image className="hover:scale-110 duration-100 ease-in-out" src="/images/t.svg" width={200} height={220} alt="Stellar" />
          <Image className="hover:scale-110 duration-100 ease-in-out" src="/images/e.svg" width={200} height={220} alt="Stellar" />
          <Image className="hover:scale-110 duration-100 ease-in-out" src="/images/l.svg" width={200} height={220} alt="Stellar" />
          <Image className="hover:scale-110 duration-100 ease-in-out" src="/images/l.svg" width={200} height={220} alt="Stellar" />
          <h1 className="hover:scale-105 duration-100 ease-in-out font-geometosBd text-white text-[3.2rem] mt-[1rem] lg:text-[20rem] lg:mt-[4rem]">A</h1>
          <Image className="hover:scale-110 duration-100 ease-in-out" src="/images/r.svg" width={210} height={220} alt="Stellar" />
          <Image className="hover:scale-110 duration-100 ease-in-out mb-16 lg:mb-52" src="/images/Ellipse.svg" width={60} height={60} alt="Stellar" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
