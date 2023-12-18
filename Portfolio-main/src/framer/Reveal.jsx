import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';


const transition = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export default function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const trigger = useAnimation();
  useEffect(() => {
    if (isInView) {
      trigger.start('animate');
    }
  }, [isInView,trigger]);
  return (
    <motion.div
      ref={ref}
      variants={transition}
      initial="initial"
      animate={trigger}
      transition={{duration:1, delay:0.1}}
    >
      {children}
    </motion.div>
  );
}
