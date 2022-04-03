import clsx from "clsx";
import Link from 'next/link'
import { AnimeCard, Header, Layout, Logo } from "../components";
import { Anime, animes } from '../config/anime';
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useColorMode } from "../components/ColorModeContext/ColorModeContext";

interface HomePageProps {
  animes: Anime[]
}

export default function HomePage({ animes }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { toggleColorMode } = useColorMode();
  const sortedAnimes = animes.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className={clsx('md:px-10 lg:px-20 container mx-auto flex flex-col justify-between')}>
      <Header>
        <div className={clsx('relative pt-4 flex justify-center items-center')}>
          <div className={clsx('flex items-end')}>
            <Logo />
            <h1 className={clsx('text-4xl font-semibold dark:text-gray-200')}>nimeccha</h1>
          </div>
          <button className={clsx('absolute right-0 p-4')} onClick={toggleColorMode}>
            <Image
              alt="Ying-Yang dark mode toggle"
              height="32px"
              width="32px"
              src={`/images/yin-yang.svg`}
              className={clsx('transition-transform dark:invert dark:rotate-180')}
            />
          </button>
        </div>
      </Header>
      <Layout>
        {sortedAnimes.map((anime: Anime) => {
          const { path, title, thumbnailUrl } = anime;
          return (
            <Link key={title} href={path}>
              <a href={path}>
                <AnimeCard title={title} thumbnailUrl={thumbnailUrl} />
              </a>
            </Link>
          );
        })}
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      animes: animes
    },
  }
}