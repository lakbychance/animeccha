import React, { useEffect } from "react";
import {
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { AnimeCard,Layout } from "../components";
import { animeMap, AnimeProps } from "../constants/constants";
import styles from "./Anime.module.css";

const Anime = () => {
  const { anime } = useParams<any>();
  const history = useHistory();
  console.log("dsds");

  useEffect(() => {
    if (!anime || !animeMap[anime]) {
      history.push("/home");
      return;
    }
  }, [history]);
  const animeDetail = animeMap[anime];
  return (
      <div className={styles.anime}>
    {animeDetail && (
      <>
        <span>{animeDetail.title}</span>
        <Layout>
          {animeDetail.montages.map((montage: any) => {
            const {title,thumbnailUrl} = montage;
            return (
              <div className={styles.montage}>
                <Link to={montage.path}>
                  <AnimeCard title={title} thumbnailUrl={thumbnailUrl}/>
                </Link>
              </div>
            );
          })}
        </Layout>
      </>
    )}
    </div>
  );
};
export default Anime;
