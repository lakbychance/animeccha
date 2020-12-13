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

export const animes = [{ title: "Dragon Ball", path: "dragonball" }];

export const animeMap = {
  dragonball: {
    title: "Dragon Ball",
    montages: [
      {
        path: "dragonball/goku-turns-blue-broly",
        title: "Goku Turns Blue facing Broly",
      },
      {
        path: "dragonball/goku-turns-super-saiyan",
        title: "Goku Turns Super Saiyan for the first time",
      },
      {
        path: "dragonball/goku-kamehameha-kefla",
        title: "Goku vs Kefla - Kamehameha",
      },
    ],
  },
} as any;

export const montageMap = {
  "goku-turns-blue-broly": {
    path: "dragonball/goku-turns-blue-broly",
    frames: 476,
  },
  "goku-turns-super-saiyan": {
    path: "dragonball/goku-turns-super-saiyan",
    frames: 453,
  },
  "goku-kamehameha-kefla": {
    path: "dragonball/goku-kamehameha-kefla",
    frames: 340,
  },
} as any;
