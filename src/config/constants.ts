export interface AnimePathParameters {
  anime: string;
}

export interface IAnimeCard {
  title: string;
  path: string;
  thumbnailUrl: string;
}

interface IAnimeMap {
  [key: string]: IAnimeMapContent;
}

export interface IAnimeMapContent {
  title: string;
  montages: IAnimeCard[];
}

interface IMontageMap {
  [key: string]: IMontageMapContent;
}

export interface IMontageMapContent {
  path: string;
  frames: number;
}

export interface MontageProps {
  title: string;
  frames: number;
  path: string;
}

export interface MontagePathParameters {
  montage: string;
}

export const DRAGONBALL = "dragonball";
export const BOKUNOHERO = "bokunohero";
export const DEMONSLAYER = "demonslayer";
export const ONEPUNCHMAN = "onepunchman";
export const ATTACKONTITAN = "attackontitan";
export const BUNGOSTRAYDOGS = "bungostraydogs";
export const HAIKYUU = "haikyuu";
export const MOBPYSCHO100 = "mobpyscho100";

export enum STATUS {
  IDLE = "idle",
  PENDING = "pending",
  RESOLVED = "resolved",
  REJECTED = "rejected",
}

export const animes: IAnimeCard[] = [
  {
    title: "Dragon Ball",
    path: DRAGONBALL,
    thumbnailUrl: `/${DRAGONBALL}/thumbnail.jpg`,
  },
  {
    title: "Boku No Hero",
    path: BOKUNOHERO,
    thumbnailUrl: `/${BOKUNOHERO}/thumbnail.jpg`,
  },
  {
    title: "Demon Slayer",
    path: DEMONSLAYER,
    thumbnailUrl: `/${DEMONSLAYER}/thumbnail.jpg`,
  },
  {
    title: "One Punch Man",
    path: ONEPUNCHMAN,
    thumbnailUrl: `/${ONEPUNCHMAN}/thumbnail.jpg`,
  },
  {
    title: "Attack On Titan",
    path: ATTACKONTITAN,
    thumbnailUrl: `/${ATTACKONTITAN}/thumbnail.jpg`,
  },
  {
    title: "Bungo Stray Dogs",
    path: BUNGOSTRAYDOGS,
    thumbnailUrl: `/${BUNGOSTRAYDOGS}/thumbnail.jpg`,
  },
  {
    title: "Haikyuu!!",
    path: HAIKYUU,
    thumbnailUrl: `/${HAIKYUU}/thumbnail.jpg`,
  },
  {
    title: "Mob Pyscho 100",
    path: MOBPYSCHO100,
    thumbnailUrl: `/${MOBPYSCHO100}/thumbnail.jpg`,
  },
];

export const animeMap: IAnimeMap = {
  dragonball: {
    title: "Dragon Ball",
    montages: [
      {
        path: `${DRAGONBALL}/goku-turns-blue-broly`,
        title: "Goku Turns Blue facing Broly",
        thumbnailUrl: `/${DRAGONBALL}/goku-turns-blue-broly/0004.jpg`,
      },
      {
        path: `${DRAGONBALL}/goku-turns-super-saiyan`,
        title: "Goku Turns Super Saiyan",
        thumbnailUrl: `/${DRAGONBALL}/goku-turns-super-saiyan/0004.jpg`,
      },
      {
        path: `${DRAGONBALL}/goku-kamehameha-kefla`,
        title: "Goku vs Kefla - Kamehameha",
        thumbnailUrl: `/${DRAGONBALL}/goku-kamehameha-kefla/0004.jpg`,
      },
    ],
  },
  bokunohero: {
    title: "Boku No Hero",
    montages: [
      {
        path: `${BOKUNOHERO}/midoriya-vs-muscular`,
        title: "Midoriya vs Muscular",
        thumbnailUrl: `/${BOKUNOHERO}/midoriya-vs-muscular/0385.jpg`,
      },
      {
        path: `${BOKUNOHERO}/allmight-vs-allforone`,
        title: "All Might vs All For One",
        thumbnailUrl: `/${BOKUNOHERO}/allmight-vs-allforone/0138.jpg`,
      },
      {
        path: `${BOKUNOHERO}/midoriya-vs-todoroki`,
        title: "Midoriya vs Todoroki",
        thumbnailUrl: `/${BOKUNOHERO}/midoriya-vs-todoroki/0374.jpg`,
      },
    ],
  },
  demonslayer: {
    title: "Demon Slayer",
    montages: [
      {
        path: `${DEMONSLAYER}/tanjiro-vs-susamaru`,
        title: "Tanjiro vs Susamaru",
        thumbnailUrl: `/${DEMONSLAYER}/tanjiro-vs-susamaru/0297.jpg`,
      },
      {
        path: `${DEMONSLAYER}/tanjiro-vs-rui`,
        title: "Tanjiro vs Rui",
        thumbnailUrl: `/${DEMONSLAYER}/tanjiro-vs-rui/0057.jpg`,
      },
    ],
  },
  onepunchman: {
    title: "One Punch Man",
    montages: [
      {
        path: `${ONEPUNCHMAN}/saitama-vs-genos`,
        title: "Saitama vs Genos",
        thumbnailUrl: `/${ONEPUNCHMAN}/saitama-vs-genos/0120.jpg`,
      },
    ],
  },
  attackontitan: {
    title: "Attack On Titan",
    montages: [
      {
        path: `${ATTACKONTITAN}/levi-vs-beast-titan`,
        title: "Levi vs Beast Titan",
        thumbnailUrl: `/${ATTACKONTITAN}/levi-vs-beast-titan/0349.jpg`,
      },
    ],
  },
  bungostraydogs: {
    title: "Bungo Stray Dogs",
    montages: [
      {
        path: `${BUNGOSTRAYDOGS}/atsushi-vs-fitzgerald`,
        title: "Atsushi vs Fitzgerald",
        thumbnailUrl: `/${BUNGOSTRAYDOGS}/atsushi-vs-fitzgerald/0206.jpg`,
      },
    ],
  },
  haikyuu: {
    title: "Haikyuu!!",
    montages: [
      {
        path: `${HAIKYUU}/tsukishima-blocks-ushijima`,
        title: "Tsukishima blocks Ushijima",
        thumbnailUrl: `/${HAIKYUU}/tsukishima-blocks-ushijima/0356.jpg`,
      },
    ],
  },
  mobpyscho100: {
    title: "Mob Pyscho 100",
    montages: [
      {
        path: `${MOBPYSCHO100}/all-vs-shimazaki`,
        title: "All vs Shimazaki",
        thumbnailUrl: `/${MOBPYSCHO100}/all-vs-shimazaki/0500.jpg`,
      },
    ],
  },
};

export const montageMap: IMontageMap = {
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
    frames: 356,
  },
  "midoriya-vs-muscular": {
    path: `${BOKUNOHERO}/midoriya-vs-muscular`,
    frames: 389,
  },
  "allmight-vs-allforone": {
    path: `${BOKUNOHERO}/allmight-vs-allforone`,
    frames: 500,
  },
  "midoriya-vs-todoroki": {
    path: `${BOKUNOHERO}/midoriya-vs-todoroki`,
    frames: 468,
  },
  "tanjiro-vs-susamaru": {
    path: `${DEMONSLAYER}/tanjiro-vs-susamaru`,
    frames: 334,
  },
  "tanjiro-vs-rui": {
    path: `${DEMONSLAYER}/tanjiro-vs-rui`,
    frames: 497,
  },
  "saitama-vs-genos": {
    path: `${ONEPUNCHMAN}/saitama-vs-genos`,
    frames: 500,
  },
  "levi-vs-beast-titan": {
    path: `${ATTACKONTITAN}/levi-vs-beast-titan`,
    frames: 500,
  },
  "atsushi-vs-fitzgerald": {
    path: `${BUNGOSTRAYDOGS}/atsushi-vs-fitzgerald`,
    frames: 500,
  },
  "tsukishima-blocks-ushijima": {
    path: `${HAIKYUU}/tsukishima-blocks-ushijima`,
    frames: 405,
  },
  "all-vs-shimazaki": {
    path: `${MOBPYSCHO100}/all-vs-shimazaki`,
    frames: 500,
  },
};

export const imagePath =
  process.env.NODE_ENV === "production"
    ? "https://ik.imagekit.io/lapstjup"
    : "http://localhost:8000/anime";

export const assetPath =
  process.env.NODE_ENV === "production"
    ? "https://ik.imagekit.io/lapstjup/assets"
    : "http://localhost:8000/assets";
