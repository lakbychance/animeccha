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
  title: string;
  path: string;
  thumbnailUrl?: string;
}

export const DRAGONBALL = "dragonball";
export const BOKUNOHERO = "bokunohero";
export const DEMONSLAYER = "demonslayer";
export const ONEPUNCHMAN = "onepunchman";

export enum STATUS {
  IDLE = "idle",
  PENDING = "pending",
  RESOLVED = "resolved",
  REJECTED = "rejected",
}

export const animes: AnimeHome[] = [
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
];

export const animeMap = {
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
        title: "Goku Turns Super Saiyan for the first time",
        thumbnailUrl: `/${DRAGONBALL}/goku-turns-super-saiyan/0004.jpg`,
      },
      {
        path: `${DRAGONBALL}/goku-kamehameha-kefla`,
        title: "Goku vs Kefla - Kamehameha",
        thumbnailUrl: `/${DRAGONBALL}/goku-kamehameha-kefla/0004.jpg`,
      },
    ] as AnimeHome[],
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
  onepunchman:{
    title:"One Punch Man",
    montages:[
      {
        path:`${ONEPUNCHMAN}/saitama-vs-genos`,
        title:"Saitama vs Genos",
        thumbnailUrl: `/${ONEPUNCHMAN}/saitama-vs-genos/0120.jpg`
      }
    ]
  }
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
  "tanjiro-vs-susamaru":{
    path: `${DEMONSLAYER}/tanjiro-vs-susamaru`,
    frames:334
  },
  "tanjiro-vs-rui":{
    path: `${DEMONSLAYER}/tanjiro-vs-rui`,
    frames:497
  },
  "saitama-vs-genos":{
    path: `${ONEPUNCHMAN}/saitama-vs-genos`,
    frames:500
  }
} as any;
