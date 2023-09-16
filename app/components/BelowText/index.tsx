import { motion } from "framer-motion";
import ButtonVar from "../Button/ButtonVar";
import { animationStart, reveal } from "@/app/utils/animation";

const BelowText = () => {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="relative">
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="text-white text-6xl font-geometosRg text-start lg:text-[7rem] absolute bottom-0 lg:left-4">
        <h1>We made</h1>
        <h2>better email app.</h2>
      </motion.div>
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col items-end w-[98vw] lg:w-[30vw] absolute mt-4 lg:bottom-4 lg:right-8">
        <p className="font-coolveticaLt text-xl text-right text-white lg:text-2xl lg:-mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet
        </p>
        <ButtonVar href="https://www.instagram.com/stellar.ti/" title="Fale Conosco" text="white" bg="transparent" />
      </motion.div>
    </motion.div>
  );
};

export default BelowText;
