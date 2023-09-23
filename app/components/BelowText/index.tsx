import { motion } from "framer-motion";
import { animationStart, reveal } from "@/app/utils/animation";

const BelowText = () => {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="relative block">
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="text-white text-6xl font-coolveticaLt text-start absolute mx-2 -bottom-[1px] leading-[3rem] md:text-[6rem] md:leading-[5.5rem] md:mx-4 lg:text-[8rem] lg:leading-[6.5rem]">
        <h1>Nós somos</h1>
        <h2>movidos pela a criatividade</h2>
      </motion.div>
    </motion.div>
  );
};

export default BelowText;
