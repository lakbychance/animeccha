import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimeCard, Layout } from "../components";
import { IAnimeCard, animes } from "../config/constants";
import styles from "./Home.module.css";

const layoutStyles: CSSProperties = { marginTop: "10px", width: "80%" };

const Home = () => {
  return (
    <>
      <motion.div className={styles.home} transition={{ duration: 0.5 }}>
        <motion.span
          className={styles.homeHeading}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          Animeccha
        </motion.span>
        <Layout layoutStyles={layoutStyles}>
          {animes.map((anime: IAnimeCard) => {
            const { path, title, thumbnailUrl } = anime;
            return (
              <Link key={title} to={`/anime/${path}`}>
                <AnimeCard title={title} thumbnailUrl={thumbnailUrl} />
              </Link>
            );
          })}
        </Layout>
      </motion.div>
    </>
  );
};

export default Home;
