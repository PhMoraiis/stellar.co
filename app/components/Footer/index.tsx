import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import Logo from "../Logo";
import Link from "next/link";

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
      <ul className="flex flex-col gap-y-3">
        {footerNavs.map((nav) => (
          <li key={nav.label}>
            <ul className="flex gap-x-4 py-2">
              {nav.items.map((item) => (
                <li key={item.name}>
                  <a
                    className="text-gray-700 text-sm hover:text-gray-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="pt-10 bg-[#f8f8ff]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <Logo />
          </div>
          <div className="flex flex-col mt-6 md:mt-0">
            <h3 className="text-black text-[1rem] pb-4">Brilhe Conosco</h3>
            <p className="text-gray-700 text-[0.9rem] pb-2">Venha fazer parte conosco da Stellar</p>
            <Link href="https://www.instagram.com/stellar.ti/" className="inline-block py-2 px-2 text-black hover:bg-[#1aa8d7] font-coolveticaLt grayGradient rounded-md">
                Saiba Mais
            </Link>
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-gray-300 items-center justify-between sm:flex">
          <div>{renderFooterNavs()}</div>
          <p className="text-gray-600">
            © 2023 Stellar Inovações. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-x-6 py-2 text-gray-700">
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
