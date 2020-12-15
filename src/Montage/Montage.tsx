import React, { useEffect, useRef, useState } from "react";
import { coverImg, currentFrame, preloadImages } from "./utility";
import { montageMap, STATUS } from "../constants/constants";
import styles from "./Montage.module.css";
import { useHistory, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import scrollIndicator from "../assets/scrollIndicator.svg";
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
  const [status, setStatus] = useState(STATUS.PENDING);
  const [images, setImages] = useState<any>([]);
  const [canScroll, setCanScroll] = useState(false);

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
        coverImg(context, img, "contain");
      };
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const updateImage = (index: number) => {
        if (canScroll) {
          setCanScroll(false);
        }
        const img = images[index];
        if (img) {
          coverImg(context, img, "contain");
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
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("scroll", scrollLogic);
      };
    }
  }, [history, montage, images, canScroll]);

  useEffect(() => {
    if (!montage || !montageMap[montage]) {
      history.push("/home");
      return;
    }
    const { path, frames } = montageMap[montage];
    preloadImages(path, 1, frames).then((images: any) => {
      setStatus(STATUS.RESOLVED);
      setImages([...images]);
    });
  }, [history, montage]);

  useEffect(() => {
    const isLoading = status === STATUS.PENDING;
    if (isLoading) {
      setTimeout(() => {
        setStatus(STATUS.IDLE);
      }, 30000);
    }
    const isLoaded = status === STATUS.RESOLVED;
    if (isLoaded) {
      setCanScroll(true);
    }
  }, [status]);

  const isLoading = status === STATUS.IDLE || status === STATUS.PENDING;
  const isIdle = status === STATUS.IDLE;
  const isResolved = status === STATUS.RESOLVED;
  const { frames } = montageMap[montage];
  return (
    <>
      <motion.div
        style={isLoading ? { height: "100vh" } : { height: `${frames}vh` }}
        className={styles.montage}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 0.5 }}
      >
        {canScroll && (
          <motion.img
            src={scrollIndicator}
            className={styles.scrollIndicator}
            animate={{
              y: [-10, 10],
            }}
            transition={{
              yoyo: Infinity,
            }}
          ></motion.img>
        )}
        {isLoading && !images.length && (
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
            {isIdle && (
              <div className={styles.refreshHint}>
                <span>This is taking longer than expected.</span>
                <button onClick={() => window.location.reload()}>
                  Refresh Page
                </button>
              </div>
            )}
          </div>
        )}
        {isResolved && !images.length}
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
