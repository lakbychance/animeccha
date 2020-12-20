import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { coverImg, preloadImageBlobUrls, createImage } from "./Montage.utility";
import { Loader } from "../../components";
import {
  montageMap,
  MontagePathParameters,
  STATUS,
} from "../../config/constants";
import scrollIndicator from "../../assets/scrollIndicator.svg";
import styles from "./Montage.module.css";

const Montage = () => {
  const { montage } = useParams<MontagePathParameters>();
  const history = useHistory();
  const [status, setStatus] = useState(STATUS.PENDING);
  const [canScroll, setCanScroll] = useState(false);
  const images = useRef<HTMLImageElement[]>([]);
  const blobUrls = useRef<string[]>([]);
  const isMounted = useRef(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!montage || !montageMap[montage]) {
      history.push("/home");
      return;
    }
    const { frames } = montageMap[montage];
    const html = document.documentElement;
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const updateImage = (index: number) => {
        if (canScroll) {
          setCanScroll(false);
        }
        const img = images.current[index];
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
    async function getImageElements() {
      const imageBlobUrls: any = await preloadImageBlobUrls(path, 1, frames);
      blobUrls.current = imageBlobUrls;
      const imagePromises = blobUrls.current.map(async (url: string) => {
        if (url) {
          return await createImage(url);
        }
      });
      const imageElements: any = await Promise.all(imagePromises);
      images.current = imageElements.filter(Boolean);
      if (isMounted.current) setStatus(STATUS.RESOLVED);
    }
    getImageElements();
    return () => {
      isMounted.current = false;
      blobUrls.current.forEach((imageBlobUrl: string) => {
        if (imageBlobUrl) {
          URL.revokeObjectURL(imageBlobUrl);
        }
      });
    };
  }, [history, montage]);

  useEffect(() => {
    const isLoading = status === STATUS.PENDING;
    if (isLoading) {
      setTimeout(() => {
        setStatus(STATUS.IDLE);
      }, 60000);
    }
    const isLoaded = status === STATUS.RESOLVED;
    if (isLoaded) {
      setCanScroll(true);
    }
  }, [status]);

  const isLoading = status === STATUS.PENDING && !images.current.length;
  const isIdle = status === STATUS.IDLE && !images.current.length;
  const { frames } = montageMap[montage];
  return (
    <>
      <motion.div
        style={
          isLoading || isIdle ? { height: "100vh" } : { height: `${frames}vh` }
        }
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
        {isLoading && <Loader />}
        {isIdle && (
          <motion.div
            className={styles.refreshHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span>This is taking longer than expected.</span>
            <button onClick={() => window.location.reload()}>
              Refresh Page
            </button>
          </motion.div>
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
