import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MenuNavLink from "../MenuNavLink";
import AnimatedLink from "../AnimatedLink";
import LogoWhite from "../LogoWhite";
import Logo from "../Logo";
import ArrowRightWhite from "../ArrowRightWhite";

const navLinks = [
  { title: "soluções.", href: "/solutions" },
  { title: "stellaris.", href: "/stellaris" },
  { title: "works.", href: "/works" },
  { title: "sobre.", href: "/about" },
  { title: "contato.", href: "/contact" },
];

const BlackNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial="hiddenVariant"
        animate="revealedVariant"
        className="font-coolveticaLt text-white w-full flex items-center justify-around h-[80px] absolute top-0 bg-[#171718] z-50"
      >
        <motion.div className="mt-2">
          <Link href="/">
            <LogoWhite />
          </Link>
        </motion.div>
        <div className="md:flex gap-[20px] text-lg items-center hidden">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <AnimatedLink title={link.title} />
            </Link>
          ))}
        </div>

        <Link href="https://www.instagram.com/stellar.ti/" target="_blank">
          <motion.div
            className="md:flex gap-[5px] text-lg items-center cursor-pointer hidden"
          >
            <AnimatedLink className="mb-[3px] font-coolveticaLt" title={"Descubra Mais"} />
            <ArrowRightWhite />
          </motion.div>
        </Link>
        <div
          className="cursor-pointer md:hidden text-lg text-white"
          onClick={toggleMenu}
        >
          Menu
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-gradient text-white p-10"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <div className="-mt-8">
                    <Link href="/">
                      <Logo />
                    </Link>
                  </div>
                  <p
                    className="cursor-pointer text-lg text-white"
                    onClick={toggleMenu}
                  >
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center font-coolveticaLt items-center gap-4 "
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div key={index} className="overflow-hidden">
                        <MenuNavLink
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default BlackNavbar;