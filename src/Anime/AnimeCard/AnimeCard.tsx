import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./AnimeCard.module.css";

const AnimeCard = ({ title, thumbnailUrl }: any) => {
  const [showImage, setShowImage] = useState(false);

  const animeCardVariant = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    final: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      variants={animeCardVariant}
      initial="initial"
      animate="final"
      className={styles.animeCard}
    >
      <div className={styles.animeThumbnail}>
        <img
          alt={title}
          className={`${styles.imageContainer} ${
            showImage ? styles.visible : styles.hidden
          }`}
          src={thumbnailUrl}
          onLoad={() => setShowImage(true)}
        ></img>

        {!showImage && (
          <div className={styles.placeHolderContainer}>
            <motion.div
              animate={{ x: [-500, 500] }}
              transition={{ duration: "1", repeat: Infinity }}
              className={styles.shimmer}
            ></motion.div>
            <span>{title}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AnimeCard;
