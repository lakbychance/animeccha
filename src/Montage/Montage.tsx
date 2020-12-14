import React, { useEffect, useRef, useState } from "react";
import { coverImg, currentFrame, preloadImages } from "./utility";
import { montageMap, MontageProps } from "../constants/constants";
import styles from "./Montage.module.css";
import { useHistory, useParams } from "react-router-dom";

const Montage = () => {
  const { montage } = useParams<any>();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {

    if (!montage || !montageMap[montage]) {
      history.push("/home");
      return;
    }
    const { path, frames } = montageMap[montage];
    const html = document.documentElement;
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      const img = new Image();
      img.src = currentFrame(path, 1);
      img.onload = function () {
        coverImg(context, img, "cover");
      };
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const updateImage = (index: number) => {
        img.src = currentFrame(path, index);
        coverImg(context, img, "cover");
      };

      const resizeHandler = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const scrollLogic = () => {
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        console.log(html.scrollHeight, html.scrollTop);
        const frameIndex = Math.min(
          frames - 1,
          Math.ceil(scrollFraction * frames)
        );
        requestAnimationFrame(()=>updateImage(frameIndex + 1));
      };
      window.addEventListener("resize", resizeHandler);
      window.addEventListener("scroll", scrollLogic);
      preloadImages(path, frames).then(()=>{
        setIsLoading(false);
      });
      return () => {
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("scroll", scrollLogic);
      };
    }
  }, [history, montage]);

  return (
    <>
      {isLoading && <span>Loading that montage</span>}
      <div
        style={isLoading ? { visibility: "hidden", height: "100vh" } : {}}
        className={styles.montage}
      >
        <canvas className={styles.canvas} ref={canvasRef} />
      </div>
    </>
  );
};

export default Montage;
