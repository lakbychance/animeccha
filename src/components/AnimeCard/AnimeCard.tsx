import React from "react";
import { thumbnailPath } from "../../config/constants";
import { Anime } from '../../config/anime'
import Image from 'next/image'
import clsx from "clsx";

const AnimeCard = ({ title, thumbnailUrl }: Partial<Anime>) => {
  return (
    <div className={clsx('rounded-lg p-2 h-full bg-blue-100 dark:bg-gray-800')}>
      <div className={clsx('rounded-lg overflow-hidden')}>
        <Image
          alt={title}
          width={800}
          height={450}
          layout='responsive'
          objectFit="cover"
          src={`${thumbnailPath}${thumbnailUrl}/tr:w-800,h-450`}
          placeholder='blur'
          blurDataURL={`${thumbnailPath}${thumbnailUrl}/tr:bl-30,q-5`}
        />
      </div>
      <p className={clsx('text-center mt-2 font-semibold dark:text-gray-200')}>{title}</p>
    </div>
  );
};

export default AnimeCard;
