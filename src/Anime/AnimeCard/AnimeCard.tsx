import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./AnimeCard.module.css";

const AnimeCard = ({ title, thumbnailUrl }: any) => {
  const [image, setImage] = useState<HTMLImageElement>();
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImage(image);
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
        {image ? (
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
