import React, { CSSProperties, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { AnimeCard, Layout, Logo } from "../../components";
import {
  animeMap,
  AnimePathParameters,
  IAnimeCard,
} from "../../config/constants";
import { useLocalStorageState } from "../../hooks";
import styles from "./Anime.module.css";

const layoutStyles: CSSProperties = { marginTop: "10px", width: "80%" };

const Anime = () => {
  const { anime } = useParams<AnimePathParameters>();
  const history = useHistory();
  const [mode] = useLocalStorageState("mode", "dark");

  useEffect(() => {
    const appContainer = document.querySelector(".appContainer");
    appContainer?.setAttribute("data-color-mode", mode);
  }, [mode]);

  useEffect(() => {
    if (!anime || !animeMap[anime]) {
      history.push("/home");
      return;
    }
  }, [anime, history]);
  const animeDetail = animeMap[anime];
  const sortedMontages = animeDetail.montages?.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  return (
    <div className={styles.anime}>
      <Logo className={styles.appLogo} mode={mode} />
      {animeDetail && (
        <>
          <span className={styles.animeTitle}>{animeDetail.title}</span>
          <Layout layoutStyles={layoutStyles}>
            {sortedMontages.map((montage: IAnimeCard) => {
              const { path, title, thumbnailUrl } = montage;
              return (
                <Link key={title} to={path}>
                  <AnimeCard title={title} thumbnailUrl={thumbnailUrl} />
                </Link>
              );
            })}
          </Layout>
        </>
      )}
    </div>
  );
};
export default Anime;
