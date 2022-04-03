export enum STATUS {
  IDLE = "idle",
  PENDING = "pending",
  RESOLVED = "resolved",
  REJECTED = "rejected",
}

const cdnBaseUrl = "https://ik.imagekit.io/lapstjup/animeccha/tr:w-800,h-450/";

export const thumbnailPath =
  process.env.NODE_ENV === "production"
    ? `${cdnBaseUrl}`
    : "http://localhost:8000/anime";

export const isBrowser = typeof window !== 'undefined'
export const isProd = process.env.NODE_ENV === 'production';