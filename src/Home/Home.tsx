import React from "react";
import { Link } from "react-router-dom";
import { Anime } from "../components";
import { animes } from "../constants/constants";
const Home = () => {
  return (
    <section>
      {animes.map((anime: any) => {
        return (
          <div>
            <Link to={`/anime/${anime.path}`}>
              <span>{anime.title}</span>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Home;
