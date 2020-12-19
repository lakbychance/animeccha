import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./AnimeCard.module.css";

const AnimeCard = ({ title, thumbnailUrl }: any) => {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setShowImage(true);
    };
    image.src = thumbnailUrl;
  }, [thumbnailUrl]);
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
        {showImage ? (
          <img
            alt={title}
            className={styles.imageContainer}
            src={thumbnailUrl}
          ></img>
        ) : (
          <div className={styles.placeHolderContainer}>
            <motion.div
              animate={{ x: [-500,500]}}
              transition={{ duration:'1',repeat:Infinity}}
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
