import { isProd } from "../../config/constants";

const coverImg = (context: any, img: HTMLImageElement, type: string) => {
  const imgRatio = img.height / img.width;
  const winRatio = window.innerHeight / window.innerWidth;
  if (
    (imgRatio < winRatio && type === "contain") ||
    (imgRatio > winRatio && type === "cover")
  ) {
    const h = window.innerWidth * imgRatio;
    context.drawImage(
      img,
      0,
      (window.innerHeight - h) / 2,
      window.innerWidth,
      h
    );
  }
  if (
    (imgRatio > winRatio && type === "contain") ||
    (imgRatio < winRatio && type === "cover")
  ) {
    const w = (window.innerWidth * winRatio) / imgRatio;
    context.drawImage(
      img,
      (window.innerWidth - w) / 2,
      0,
      w,
      window.innerHeight
    );
  }
};

const getDimenstions = () => {
  const width = window.innerWidth;
  if (width >= 960) {
    return { width: 960, height: 540 };
  } else if (width >= 640 && width <= 960) {
    return { width: 640, height: 360 };
  }
  return { width: 480, height: 270 };
};

const getHeight = (width: number) => {
  return Math.floor((9 * width) / 16);
};

const cdnBaseUrl = "https://ik.imagekit.io/lapstjup/animeccha/";

const getMontagePath = () => {
  if (isProd) {
    const currentDimensions = getDimenstions();
    return `${cdnBaseUrl}tr:w-${Math.min(
      window.innerWidth,
      currentDimensions.width
    )},h-${Math.min(getHeight(window.innerWidth), currentDimensions.height)}`;
  }
  return `http://localhost:8000/anime`;
}

const currentFrame = (path: string, index: number) =>
  `${getMontagePath()}/${path}/${index.toString().padStart(4, "0")}.jpg`;

const preloadImages = (path: string, initial: number, frameCount: number) => {
  const imagePromisesArray: Promise<HTMLImageElement>[] = [];
  for (let i = initial; i < frameCount; i++) {
    imagePromisesArray.push(
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          reject(null);
        };
        img.src = currentFrame(path, i);
      })
    );
  }
  return new Promise((resolve) => {
    Promise.all(imagePromisesArray).then((images) => {
      resolve(images.filter(Boolean));
    });
  });
};

export const preloadImageBlobUrls = async (
  path: string,
  initial: number,
  frameCount: number
) => {
  const urls = [];
  for (let i = initial; i < frameCount; i++) {
    urls.push(currentFrame(path, i));
  }
  const imageBlobsUrls = await Promise.all(
    urls.map(async (url: string) => {
      try {
        const response = await fetch(url);
        const fileBlob = await response.blob();
        if (fileBlob.type === "image/jpeg")
          return URL.createObjectURL(fileBlob);
      } catch (e) {
        return null;
      }
    })
  );
  return imageBlobsUrls;
};

export const createImage = (url: string) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      resolve(null);
    };
    img.src = url;
  });
};


export { coverImg, currentFrame, preloadImages };
