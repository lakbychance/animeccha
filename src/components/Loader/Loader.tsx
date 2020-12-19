import React from "react";
import { motion } from "framer-motion";
import styles from "./Loader.module.css";
const loaderVariants = {
  initial: {},
  final: {
    scale: [0.5, 0.8],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};
const Loader = () => {
  return (
    <div className={styles.loader}>
      <motion.div
        className={styles.ballContainer}
        animate={{ y: [-20, 0] }}
        transition={{ yoyo: Infinity }}
      >
        {Array(3)
          .fill("*")
          .map((_val,index) => {
            return (
              <motion.div
                key={index}
                className={styles.ball}
                variants={loaderVariants}
                initial="initial"
                animate="final"
              ></motion.div>
            );
          })}
      </motion.div>
      <motion.span
        className={styles.loadingText}
        animate={{ x: [-10, 10] }}
        transition={{ yoyo: Infinity }}
      >
        Yo anime lover, loading your montage...
      </motion.span>
    </div>
  );
};
export default Loader;
