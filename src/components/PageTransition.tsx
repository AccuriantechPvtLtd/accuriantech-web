import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.995,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.998,
    transition: {
      duration: 0.3,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
  },
};

const PageTransition = ({ children }: Props) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default PageTransition;
