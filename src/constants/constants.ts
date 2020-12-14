export interface MontageProps {
  title: string;
  frames: number;
  path: string;
}

export interface AnimeProps {
  name: string;
  thumbnailUrl?: string;
  montages: MontageProps[];
}

export interface AnimeHome {
  title:string;
  path:string;
  thumbnailUrl?:string;
}

export const DRAGONBALL = "dragonball";

export const animes:AnimeHome[] = [{ title: "Dragon Ball", path: DRAGONBALL,thumbnailUrl:`/${DRAGONBALL}/thumbnail.jpg`}];

export const animeMap = {
  dragonball: {
    title: "Dragon Ball",
    montages: [
      {
        path: `${DRAGONBALL}/goku-turns-blue-broly`,
        title: "Goku Turns Blue facing Broly",
        thumbnailUrl:`/${DRAGONBALL}/goku-turns-blue-broly/0004.jpg`
        
      },
      {
        path: `${DRAGONBALL}/goku-turns-super-saiyan`,
        title: "Goku Turns Super Saiyan for the first time",
        thumbnailUrl:`/${DRAGONBALL}/goku-turns-super-saiyan/0004.jpg`
      },
      {
        path: `${DRAGONBALL}/goku-kamehameha-kefla`,
        title: "Goku vs Kefla - Kamehameha",
        thumbnailUrl:`/${DRAGONBALL}/goku-kamehameha-kefla/0004.jpg`
      },
    ] as AnimeHome[],
  },
} as any;

export const montageMap = {
  "goku-turns-blue-broly": {
    path: `${DRAGONBALL}/goku-turns-blue-broly`,
    frames: 476,
  },
  "goku-turns-super-saiyan": {
    path: `${DRAGONBALL}/goku-turns-super-saiyan`,
    frames: 453,
  },
  "goku-kamehameha-kefla": {
    path: `${DRAGONBALL}/goku-kamehameha-kefla`,
    frames: 340,
  },
} as any;
