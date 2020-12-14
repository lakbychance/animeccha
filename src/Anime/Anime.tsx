import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { AnimeCard, Layout } from "../components";
import { animeMap } from "../constants/constants";
import styles from "./Anime.module.css";

const Anime = () => {
  const { anime } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    if (!anime || !animeMap[anime]) {
      history.push("/home");
      return;
    }
  }, [anime,history]);
  const animeDetail = animeMap[anime];
  return (
    <motion.div
      className={styles.anime}
      transition={{ duration: 0.5 }}
    >
      {animeDetail && (
        <>
          <motion.span
            className={styles.animeTitle}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
          >
            {animeDetail.title}
          </motion.span>
          <Layout>
            {animeDetail.montages.map((montage: any) => {
              const { title, thumbnailUrl } = montage;
              return (
                <div className={styles.montage}>
                  <Link to={montage.path}>
                    <AnimeCard title={title} thumbnailUrl={thumbnailUrl} />
                  </Link>
                </div>
              );
            })}
          </Layout>
        </>
      )}
    </motion.div>
  );
};
export default Anime;
