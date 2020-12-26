import React, { useState } from "react";
import { IAnimeCard, thumbnailPath } from "../../config/constants";
import styles from "./AnimeCard.module.css";

const AnimeCard = ({ title, thumbnailUrl }: Partial<IAnimeCard>) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className={styles.animeCard}>
      <div className={styles.animeThumbnail}>
        <img
          alt={title}
          className={`${styles.imageContainer} ${
            showImage ? styles.visible : styles.hidden
          }`}
          src={`${thumbnailPath}${thumbnailUrl}`}
          onLoad={() => setShowImage(true)}
        ></img>
        {showImage && <span className={styles.animeCardTitle}>{title}</span>}
        {!showImage && (
          <div className={`${styles.placeHolderContainer} ${styles.animate}`}>
            <span>{title}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeCard;
