'use client'

import { motion } from "framer-motion";
import { animationStart, reveal } from "./../../utils/animation";
import Star from "../Star";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-[6vw] md:text-[4rem] font-geometosRg mb-[30px] pt-[100px]"
      >
        <span className="flex items-center gap-[10px]">
          inovando <Star /> futuro com
        </span>
        <span>tecnologia</span>
      </motion.div>
      {/* <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-[30px] w-3/4 lg:w-1/3 md:w-1/2 text-[-14px] leading-tight font-coolveticaLt"
      >
        Apaixonados por tecnologia, inovação e resultados. Nossa missão é transformar ideias ousadas em soluções práticas que impulsionam o sucesso dos nossos clientes.

        Combinamos expertise técnica com criatividade, criando produtos e serviços que redefinem a forma como o mundo funciona.
      </motion.span> */}
    </motion.div>
  );
}

export default HeroText;