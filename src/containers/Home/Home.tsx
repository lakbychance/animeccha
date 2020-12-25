import React, { CSSProperties, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimeCard, Layout } from "../../components";
import { IAnimeCard, animes, assetPath } from "../../config/constants";
import { useLocalStorageState } from "../../hooks";
import darkIcon from "../../assets/icons/animeccha-dark.svg";
import styles from "./Home.module.css";

const layoutStyles: CSSProperties = { marginTop: "10px", width: "80%" };

const Home = () => {
  const [mode, setMode] = useLocalStorageState("mode", "dark");
  const sortedAnimes = animes.sort((a, b) => a.title.localeCompare(b.title));
  useEffect(() => {
    const appContainer = document.querySelector(".appContainer");
    appContainer?.setAttribute("data-color-mode", mode);
  }, [mode]);

  const toggleColorMode = () => {
    const appContainer = document.querySelector(".appContainer");
    const nextMode = mode === "light" ? "dark" : "light";
    appContainer?.setAttribute("data-color-mode", nextMode);
    setMode(nextMode);
  };
  return (
    <>
      <motion.div className={styles.home} transition={{ duration: 0.5 }}>
        <motion.div
          className={styles.heading}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          <img
            alt="A"
            className={clsx(mode === "light" && styles.lightMode)}
            src={darkIcon}
            width="40"
            height="40"
          ></img>
          <motion.span className={styles.homeHeading}>nimeccha</motion.span>
        </motion.div>
        <img
          alt="Yin-Yang symbol"
          className={clsx(
            styles.colorModeToggle,
            mode === "dark" && styles.colorModeDark
          )}
          height="30px"
          width="30px"
          onClick={toggleColorMode}
          src={`${assetPath}/yin-yang.svg`}
        ></img>
        <Layout layoutStyles={layoutStyles}>
          {sortedAnimes.map((anime: IAnimeCard) => {
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
