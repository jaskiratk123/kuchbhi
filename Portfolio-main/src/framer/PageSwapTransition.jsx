import React from 'react';
import { motion } from 'framer-motion';

const transition = {
  initial: { opacity: 0 },
  animate: { opacity: 1},
  exit: { opacity: 0 },
};

export default function PageSwapTransition({ children }) {
  return (
    <motion.div
      variants={transition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
