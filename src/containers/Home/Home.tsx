import React, { CSSProperties } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { AnimeCard, Header, Layout, Logo } from "../../components";
import { IAnimeCard, animes, assetPath } from "../../config/constants";
import styles from "./Home.module.css";
import { useColorMode } from "../../components/ColorModeContext/ColorModeContext";

const layoutStyles: CSSProperties = { marginTop: "10px", width: "80%" };

const Home = () => {
  const { mode, toggleColorMode } = useColorMode();
  const sortedAnimes = animes.sort((a, b) => a.title.localeCompare(b.title));

  const handleKey = (event: React.KeyboardEvent) => {
    const isEnterEvent = event.key === "Enter";
    if (isEnterEvent) {
      toggleColorMode && toggleColorMode();
    }
  };

  return (
    <div className={styles.home}>
      <Header text={"nimeccha"}>
        <Logo mode={mode} />
        <img
          alt="Yin-Yang symbol"
          className={clsx(
            styles.colorModeToggle,
            mode === "dark" && styles.colorModeDark
          )}
          height="30px"
          width="30px"
          onClick={toggleColorMode}
          onKeyDown={handleKey}
          src={`${assetPath}/yin-yang.svg`}
          tabIndex={0}
        ></img>
      </Header>
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
    </div>
  );
};

export default Home;
