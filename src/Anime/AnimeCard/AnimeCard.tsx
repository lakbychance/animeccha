import React from "react"
import styles from "./AnimeCard.module.css"
const AnimeCard=({title,thumbnailUrl}:any)=>{
    return (
        <div className={styles.animeCard}>
          <div className={styles.animeThumbnail}>
              <img alt={title} src={thumbnailUrl}></img>
          </div>
        </div>
    )
}

export default AnimeCard;