import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Sobre Nós", path: "javascript:void(0)" },
    { title: "Serviços", path: "javascript:void(0)" },
  ];

  return (
    <nav className="bg-transparent w-full md:static md:text-sm">
      <div className="items-center px-6 max-w-screen-[1240px] mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:py-2 md:block">
          <a href="javascript:void(0)">
            <Image
              src="/images/Logo.svg"
              width={150}
              height={40}
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-white hover:text-[#848D95]"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="text-[15px] leading-[1.2] tracking-wide font-normal justify-end items-center mr-6 space-y-4 gap-x-4 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, id) => {
              return (
                <li key={id} className="text-white hover">
                    <a href={item.path} className="block">{item.title}</a>
                </li>
              );
            })}
            <div className="space-y-4 items-center gap-x-8 md:flex md:spacx'e-y-0">
              <li>
                  <a
                    href="javascript:void(0)"
                    className="block py-2 px-4 font-medium text-center text-white rounded-[3rem] md:inline button"
                  >
                    Fale Conosco
                  </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Header };
