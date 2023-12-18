import { motion } from 'framer-motion';



export default function OpacityReveal({children}) {
    const transition = {
        initial: { opacity: 0 },
        animate: { opacity: 1},
      };
  return (
    <motion.div
      variants={transition}
      initial="initial"
      animate="animate"
      transition={{ duration: 1.5,ease: "easeInOut"}}
    >
      {children}
    </motion.div>
  );
}
