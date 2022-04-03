import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import React from 'react'
import { AnimeCard, Header, Layout, Logo } from '../../components'
import { useColorMode } from '../../components/ColorModeContext/ColorModeContext'
import { animeMap, Anime } from '../../config/anime'
interface AnimePageProps {
    anime: string
}
import Link from 'next/link'
import clsx from 'clsx'

interface AnimePageProps {
    anime: string;
}

const AnimePage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { anime } = props;
    const animeDetail = animeMap[anime]
    const sortedMontages = animeDetail?.montages?.sort((a, b) =>
        a.title.localeCompare(b.title)
    )
    return (
        <div className={clsx('md:px-10 lg:px-20 container mx-auto flex flex-col justify-between')}>
            <Header>
                <div className={clsx('relative pt-4 flex justify-center items-center')}>
                    <h1 className={clsx('text-4xl font-semibold dark:text-gray-200')}>{animeDetail.title}</h1>
                    <div className={clsx('absolute left-0 p-4')}><Logo /></div>
                </div>
            </Header>
            <Layout>
                {sortedMontages.map((montage: Anime) => {
                    const { path, title, thumbnailUrl } = montage
                    return (
                        <Link key={title} href={path}>
                            <a href={path}>
                                <AnimeCard
                                    title={title}
                                    thumbnailUrl={thumbnailUrl}
                                />
                            </a>
                        </Link>
                    )
                })}
            </Layout>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps<AnimePageProps> = async (context) => {
    const { params } = context
    const anime = params?.anime.toString();
    if (!anime || !animeMap[anime]) {
        return { notFound: true }
    }
    return {
        props: {
            anime,
        },
    }
}

export default AnimePage
