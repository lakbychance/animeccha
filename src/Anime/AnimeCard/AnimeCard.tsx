import React from "react";
import { motion } from "framer-motion";
import styles from "./AnimeCard.module.css";
const AnimeCard = ({ title, thumbnailUrl }: any) => {
  const animeCardVariant = {
    initial: {
      opacity: 0,
      y:'-100vh'
    },
    final: {
      opacity: 1,
      y:0
    },
    exit:{
        x:'-100vw',
        transition:{
            ease:'easeIn'
        }
    }
  };
  return (
    <motion.div
      variants={animeCardVariant}
      initial="initial"
      animate="final"
      exit='exit'
      className={styles.animeCard}
    >
      <div className={styles.animeThumbnail}>
        <img alt={title} src={thumbnailUrl}></img>
      </div>
    </motion.div>
  );
};

export default AnimeCard;
