import React from "react";
import { Link } from "react-router-dom";
import { AnimeCard } from "../components";
import { AnimeHome, animes } from "../constants/constants";
import styles from './Home.module.css'
const Home = () => {
  return (
      <div className={styles.animeList}>
      {animes.map((anime: AnimeHome) => {
        const {title,thumbnailUrl,path} = anime;
        return (
            <Link to={`/anime/${path}`}>
              <AnimeCard title={title} thumbnailUrl={thumbnailUrl}/>
            </Link>
        );
      })}
      </div>
  );
};

export default Home;
