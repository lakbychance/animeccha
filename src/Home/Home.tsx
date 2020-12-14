import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { AnimeCard, Layout } from "../components";
import { AnimeHome, animes } from "../constants/constants";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <motion.div
        className={styles.home}
        transition={{duration:0.5}}
      >
        <motion.span
          className={styles.homeHeading}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          Animeccha
        </motion.span>
        <Layout>
          {animes.map((anime: AnimeHome) => {
            const { title, thumbnailUrl, path } = anime;
            return (
              <div>
                <Link to={`/anime/${path}`}>
                  <AnimeCard title={title} thumbnailUrl={thumbnailUrl} />
                </Link>
              </div>
            );
          })}
        </Layout>
      </motion.div>
    </>
  );
};

export default Home;
