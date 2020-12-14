import { resolve } from "dns";


const coverImg = (context:any, img:HTMLImageElement, type:string) => {
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
      context.drawImage(img, (window.innerWidth - w) / 2, 0, w, window.innerHeight);
    }
  };

const currentFrame = (path:string,index:number) =>
  `/${path}/${index.toString().padStart(4, "0")}.jpg`; 

const preloadImages = (path:string,frameCount:number) => {
  const imagePromisesArray:any = [];
    for (let i = 1; i < frameCount; i++) {
      imagePromisesArray.push(new Promise((resolve,reject)=>{
        const img = new Image();
        img.onload=()=>{
          resolve(img);
        }
        img.onerror=()=>{
          reject(null);
        }
        img.src = currentFrame(path,i);
      }));

    }
    return new Promise((resolve,reject)=>{
      Promise.all(imagePromisesArray).then(images=>{
        resolve(images.filter(Boolean))
      })
    })
  };
  

  
  export {coverImg,currentFrame,preloadImages}