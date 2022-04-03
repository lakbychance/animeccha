import clsx from "clsx";
import React from "react";
const Footer = () => {
  return (
    <footer className={clsx('flex flex-col items-center justify-center bg-blue-100 dark:bg-gray-800 dark:text-gray-200 p-8 text-center')}>
      <p>
        Made with <span className={clsx('text-red-500')}>♥</span> in India
      </p>
      <a
        className={clsx('mt-2')}
        href="https://flaticon.com"
        rel="noreferrer"
        target="_blank"
      >
        <p className={clsx('')}>Icons by Flaticon - www.flaticon.com</p>
      </a>
      <p className={clsx('text-sm mt-1')}>
        * All the images used for respective anime montages is the hardwork of
        several animators. There is no scope of commercializing this without the
        relevant authority's approval.
      </p>
    </footer>
  );
};

export default Footer;
