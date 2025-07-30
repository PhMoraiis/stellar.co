import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiDribbbleFill,
  RiBehanceFill,
} from "react-icons/ri";

const FooterSocials = () => {
  const NavSocialItems = [
    {
      icon: <RiInstagramFill />,
      route: "https://www.instagram.com/stellarstudio.br/",
      id: 1,
    },
    {
      icon: <RiLinkedinFill />,
      route: "https://www.instagram.com/stellarstudio.br/",
      id: 2,
    },
    {
      icon: <RiDribbbleFill />,
      route: "https://www.instagram.com/stellarstudio.br/",
      id: 3,
    },
    {
      icon: <RiBehanceFill />,
      route: "https://www.instagram.com/stellarstudio.br/",
      id: 4,
    },
  ];

  return (
    <div className="flex space-x-4 text-gray-200 text-xl lg:text-4xl md:text-3xl mt-4">
      {NavSocialItems.map((item) => (
        <div
          className="bg-[#303030] rounded-full text-primary-foreground shadow-lg hover:bg-[#303030]/60 cursor-pointer size-16 flex items-center justify-center text-center"
          key={item.id}
        >
          <Link href={item.route} key={item.id}>
            {item.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterSocials;
