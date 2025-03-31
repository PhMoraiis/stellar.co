'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import FooterSocials from './Socials'

const Footer = () => {
  const pathname = usePathname()

  const renderFooterNavs = () => {
    const navItems = [
      { title: 'home', route: '/' },
      { title: 'soluções', route: '/solutions' },
      { title: 'works', route: '/works' },
      { title: 'sobre', route: '/about' },
      { title: 'contato', route: '/contact' },
    ]

    return (
      <ul className="text-gray-200 text-xl lg:text-2xl md:text-3xl">
        {navItems.map(item => (
          <li
            key={item.title}
            className={`flex-col gap-y-[4px] block duration-300 ease-in ${
              pathname.toString() === item.route
                ? 'border-b-[1px] border-white inline-flex'
                : ''
            }`}
          >
            <Link href={item.route}>{item.title}</Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <footer className="py-4 pb-6 lg:pt-20 bg-[#171718] font-coolveticaLt">
      <div className="px-4 lg:px-20">
        <div className="lg:flex">
          <div className="flex-1 mb-16 lg:flex lg:items-start lg:justify-start lg:flex-col">
            <h1 className="text-[1.6rem] lg:text-[3rem] md:text-5xl text-white font-coolveticaRg flex items-center">
              Relaxa. Nós guiamos você!
            </h1>
            <div className="text-white text-xl lg:text-2xl md:text-3xl font-coolveticaLt">
              <Link
                href="https://www.instagram.com/stellar.ti/"
                target="_blank"
              >
                descubra mais sobre nós.
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-12">
              <div className="pb-12">{renderFooterNavs()}</div>
              <div className="pb-4 lg:ml-8">
                <FooterSocials />
              </div>
            </div>
          </div>
        </div>
        <div className="block items-center justify-center md:block lg:mx-auto py-2 mx-auto mt-4 lg:block lg:justify-center lg:items-center">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1098 196"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M9.50333 175.273L22.2963 155.9C31.4341 163.211 50.8063 171.983 66.3406 171.983C85.53 171.983 91.9265 164.307 91.9265 156.083C91.9265 143.473 77.4887 140.549 61.5889 137.442C45.8719 134.335 10.5999 129.401 10.5999 97.0529C10.5999 65.6188 38.9271 57.212 61.4062 57.212C83.8852 57.212 97.7747 64.1567 111.299 74.3911L97.2264 93.7633C86.261 86.2702 73.1026 80.9703 58.6648 80.9703C48.6132 80.9703 36.1858 84.0772 36.1858 94.4943C36.1858 106.739 53.1821 110.029 67.2544 112.953C83.3369 116.242 117.512 118.801 117.512 154.621C117.512 182.217 96.8609 195.559 66.7061 195.559C38.9271 195.559 23.5756 185.69 9.50333 175.273ZM242.819 59.2223V81.8841H204.623V193H179.037V81.8841H140.658V59.2223H242.819ZM379.725 81.8841H306.805V115.329H371.501V137.99H306.805V170.338H379.725V193H281.402V59.2223H379.725V81.8841ZM450.016 170.338H520.743V193H424.43V59.2223H450.016V170.338ZM580.73 170.338H651.457V193H555.144V59.2223H580.73V170.338ZM700.113 193H672.334L740.685 59.2223H743.243L811.594 193H783.815L773.398 171.983H710.347L700.113 193ZM741.964 109.298L722.774 149.687H760.971L741.964 109.298ZM894.684 150.418H869.281V193H843.878V59.2223H904.553C931.784 59.2223 950.607 78.229 950.607 105.277C950.607 125.38 939.642 143.473 922.828 148.042L956.273 193H925.753L894.684 150.418ZM869.281 81.8841V128.121H898.522C920.087 128.121 925.204 116.425 925.204 105.094C925.204 92.1185 917.346 81.8841 898.522 81.8841H869.281Z"
              fill="#303030"
            />
            <ellipse
              cx="1067.06"
              cy="31.0945"
              rx="30.1081"
              ry="31.0546"
              fill="#303030"
            />
          </svg>
        </div>
        <div className="text-gray-300 md:text-xl flex items-center flex-col mt-12 md:flex-row md:justify-between lg:flex-row lg:justify-between">
          <div className="flex">
            <Link href="/privacy">Politica de Privacidade</Link>
            <span>/</span>
            <Link href="/terms">Termos</Link>
          </div>
          <p>©2025 Stellar Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
