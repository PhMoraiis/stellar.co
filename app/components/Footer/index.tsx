import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import LogoWhite from "../Logo";
import AnimatedLink from "../AnimatedLink";

const Footer = () => {

  const footerNavs = [
    {
      label: "About",
      items: [
        {
          name: "Termos",
        },
        {
          name: "Licenças",
        },
        {
          name: "Privacidade",
        },
        {
          name: "Sobre Nós",
        },
      ],
    },
  ];

  const renderFooterNavs = () => {
    return (
      <ul className="flex flex-col gap-y-3 text-gray-200">
        <li>
          <ul className="flex gap-x-4 py-2">
            <li className="flex gap-x-4">
              <AnimatedLink title={"Termos"} />
              <AnimatedLink title={"Licenças"} />
              <AnimatedLink title={"Privacidade"} />
              <AnimatedLink title={"Sobre Nós"} />
            </li>
          </ul>
        </li>
      </ul>
    );
  };

  return (
    <footer className="pt-10 bg-[#171718]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <Link href="/">
              <LogoWhite />
            </Link>
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <h3 className="text-white text-[1rem] pb-4">Brilhe Conosco</h3>
            <p className="text-gray-400 text-[0.9rem] pb-2">Venha fazer parte conosco da Stellar</p>
            <Link href="https://www.instagram.com/stellar.ti/" className="inline-block py-2 px-2 text-white hover:bg-[#1aa8d7] font-coolveticaLt grayGradient rounded-md">
              Saiba Mais
            </Link>
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-gray-300 items-center justify-between sm:flex">
          <div>{renderFooterNavs()}</div>
          <p className="text-gray-300">
            © 2023 Stellar Inovações. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-x-6 py-2 text-gray-300">
            <Link href="https://www.instagram.com/stellar.ti/">
              <BsFacebook className="w-8 h-8 hover:text-gray-500 duration-150" />
            </Link>
            <Link href="https://www.instagram.com/stellar.ti/">
              <IoLogoTwitter className="w-8 h-8 hover:text-gray-500 duration-150" />
            </Link>
            <Link href="https://www.instagram.com/stellar.ti/">
              <IoLogoInstagram className="w-8 h-8 hover:text-gray-500 duration-150" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
