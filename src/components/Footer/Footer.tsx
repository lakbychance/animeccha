import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with <span style={{ color: "rgb(231, 76, 60)" }}>♥</span> in India
      </p>
      <a
        className={styles.attributeLink}
        href="https://flaticon.com"
        target="_blank"
      >
        <p>Icons by Flaticon - www.flaticon.com</p>
      </a>
      <p className={styles.disclaimer}>
        * All the images used for respective anime montages is the hardwork of
        several animators. There is no scope of commercializing this without the
        relevant authority's approval.
      </p>
    </footer>
  );
};

export default Footer;
