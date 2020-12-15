import React, { useEffect, useRef, useState } from "react";
import { coverImg, currentFrame, preloadImages } from "./utility";
import { montageMap } from "../constants/constants";
import styles from "./Montage.module.css";
import { useHistory, useParams } from "react-router-dom";
import { motion } from "framer-motion";
const montageVariants = {
  initial: {},
  final: {
    scale: [0.5, 0.8],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};
const Montage = () => {
  const { montage } = useParams<any>();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<any>([]);
  const isMounted = useRef(true);

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
      // const img = new Image();
      // img.src = currentFrame(path, 1);
      // img.onload = function () {
      //   coverImg(context, img, "contain");
      // };
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const updateImage = (index: number) => {
        console.log(index)
        const img = images[index];
        if (img) {
          coverImg(context, img, "contain");
        } else {
          const newImg = new Image();
          newImg.src = currentFrame(path, index);
          newImg.onload = () => {
            const updatedImages = [...images];
            updatedImages[index] = newImg;
            setImages(updatedImages)
          }
        }
      };

      const resizeHandler = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const scrollLogic = () => {
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
          frames - 1,
          Math.ceil(scrollFraction * frames)
        );
        requestAnimationFrame(() => updateImage(frameIndex + 1));
      };
      window.addEventListener("resize", resizeHandler);
      window.addEventListener("scroll", scrollLogic);
      return () => {
        isMounted.current = false;
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("scroll", scrollLogic);
      };
    }
  }, [history, montage, images]);

  useEffect(() => {
    if (!montage || !montageMap[montage]) {
      history.push("/home");
      return;
    }
    const { path, frames } = montageMap[montage];
    // preloadImages(path, frames, isMounted.current).then((images: any) => {
    //   isMounted && setIsLoading(false);
    //   isMounted && setImages([...images]);
    // });
    return () => {
      isMounted.current = false;
    };
  }, [history, montage]);

  return (
    <>
      <motion.div
        style={isLoading ? { height: "100vh" } : {}}
        className={styles.montage}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 0.5 }}
      >
        {isLoading && (
          <div className={styles.loader}>
            <motion.div
              className={styles.ballContainer}
              animate={{ y: [-20, 0] }}
              transition={{ yoyo: Infinity }}
            >
              {Array(3)
                .fill("*")
                .map(() => {
                  return (
                    <motion.div
                      className={styles.ball}
                      variants={montageVariants}
                      initial="initial"
                      animate="final"
                    ></motion.div>
                  );
                })}
            </motion.div>
            <motion.span
              className={styles.loadingText}
              animate={{ x: [-10, 10] }}
              transition={{ yoyo: Infinity }}
            >
              Yo anime lover, loading your montage...
            </motion.span>
          </div>
        )}
        <canvas
          style={isLoading ? { visibility: "hidden" } : {}}
          className={styles.canvas}
          ref={canvasRef}
        />
      </motion.div>
    </>
  );
};

export default Montage;
