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
  `/${path}/${index.toString().padStart(4, "0")}.jpg?nf_resize=fit&w=${Math.min(window.innerWidth,800)}`; 

const preloadImages = (path:string,initial:number,frameCount:number) => {
  const imagePromisesArray:any = [];
    for (let i = initial; i < frameCount; i++) {
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
    return new Promise((resolve)=>{
      Promise.all(imagePromisesArray).then(images=>{
        resolve(images.filter(Boolean))
      })
    })
  };

  export const preloadImageBlobUrls = async (path:string,initial:number,frameCount:number) => {
    const imageBlobUrlsArray:any = [];
    for (let i = initial; i < frameCount; i++) {
      try{
        const response = await fetch(currentFrame(path,i));
        const fileBlob = await response.blob();
        if(fileBlob.type==='image/jpeg'){
          imageBlobUrlsArray.push(URL.createObjectURL(fileBlob));
        }
      }
      catch(err){
        imageBlobUrlsArray.push(null);
      }
    }
    return new Promise((resolve)=>{
      Promise.all(imageBlobUrlsArray).then(imageBlobUrls=>{
        resolve(imageBlobUrls.filter(Boolean))
      })
    })
  }
  
  export const createImage = (url:any) => {
    return new Promise((resolve, reject) => {
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

  
  export {coverImg,currentFrame,preloadImages}