import { motion } from "framer-motion";
import Link from "next/link";

const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    },
};

const MenuNavLink = ({ title, href }: any) => {
    return (
        <motion.div
            variants={mobileLinkVars}
            className="text-6xl uppercase text-black"
        >
            <Link href={href}>{title}</Link>
        </motion.div>
    );
};

export default MenuNavLink;