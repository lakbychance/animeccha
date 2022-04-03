
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import dynamic from "next/dynamic";

import { animeMap, montageMap } from "../../config/anime";

const Montage = dynamic(() => import('../../components/Montage/Montage'), { ssr: false });

interface MontagePageProps {
    montage: string
}

const MontagePage = ({ montage }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <Montage montage={montage} />
}

export const getServerSideProps: GetServerSideProps<MontagePageProps> = async (context) => {
    const { params } = context
    const anime = params?.anime.toString();
    const montage = params?.montage.toString();
    if (!anime || !animeMap[anime]) {
        return { notFound: true }
    }
    if (!montage || !montageMap[montage]) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            montage: montage,
        },
    }
}

export default MontagePage;