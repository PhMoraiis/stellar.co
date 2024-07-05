import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

const FooterSocials = () => {
  const NavSocialItems = [
    { title: 'x.', route: '/' },
    { title: 'instagram.', route: 'https://www.instagram.com/stellar.ti/' },
    { title: 'linkedin.', route: 'https://www.linkedin.com/company/stellar-ti/' },
    { title: 'blog.', route: 'https://www.linkedin.com/company/stellar-ti/' },
  ]

  return (
    <ul className="text-gray-200 text-xl lg:text-2xl md:text-3xl">
      {NavSocialItems.map((item) => (
        <li
          key={item.title}
          className="flex-col gap-y-[2px] block">
          <div className="flex items-center">
            <Link href={item.route} target="_blank">
              {item.title}
            </Link>
            <FiArrowUpRight className="hover:scale-125 duration-300 ease-in" />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default FooterSocials