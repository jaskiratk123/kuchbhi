import { motion } from 'framer-motion';
import React from 'react';

export default function NavbarReveal({ children, opacityValue, zValue }) {
  const transition = {
    initial: { y: '110vh', position: 'fixed' },
    animate: {
      zIndex: zValue,
      position: 'fixed',
      y: opacityValue ? '100vh' : '110vh',
      x: '0vw',
    },
    exit: { y: '110vh', position: 'fixed' },
  };

  return (
    <motion.div
      variants={transition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
