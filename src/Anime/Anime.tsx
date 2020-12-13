import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { animeMap, AnimeProps } from "../constants/constants";
import styles from "./Anime.module.css";

const Anime = () => {
  const { anime } = useParams<any>();
  const history = useHistory();
  console.log("dsds");

  useEffect(() => {
    if (!anime || !animeMap[anime]) {
        console.log("o")
      history.push("/home");
      return;
    }
  }, [history]);
  const animeDetail = animeMap[anime];
  return (
      <>
    {animeDetail && (
      <>
        <span>{animeDetail.title}</span>
        <section className={styles.animeMontages}>
          {animeDetail.montages.map((montage: any) => {
            return (
              <div className={styles.montage}>
                <Link to={montage.path}>
                  <span>{montage.title}</span>
                </Link>
              </div>
            );
          })}
        </section>
      </>
    )}
    </>
  );
};
export default Anime;
