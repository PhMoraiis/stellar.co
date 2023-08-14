import Logo from "../Logo";
import ArrowRight from "../Arrow";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../../utils/animation";
import Link from "next/link";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-[80px] absolute top-0 bg-[#f8f8ff] z-50"
      >
        <motion.div variants={reveal}>
          <Link href="/">
            <Logo />
          </Link>
        </motion.div>
        <div className="gap-[20px] items-center hidden">
          <motion.span variants={reveal} className="cursor-pointer">
            soluções.
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            serviços.
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            recursos.
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            sobre.
          </motion.span>
        </div>
        <Link href="https://www.instagram.com/stellar.ti/" target="_blank">
          <motion.div
            variants={reveal}
            className="flex gap-[5px] items-center cursor-pointer"
          >
            <span className="mb-[3px] font-coolveticaLt">Descubra Mais</span>
            <ArrowRight />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;