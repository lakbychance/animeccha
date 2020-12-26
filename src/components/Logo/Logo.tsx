import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import darkIcon from "../../assets/icons/animeccha-dark.svg";
import styles from "./Logo.module.css";

interface ComponentProps {
  className?: string;
  mode: string;
}
const Logo = ({ className, mode }: ComponentProps) => {
  return (
    <Link className={className} to="/home">
      <img
        alt="A"
        className={clsx(mode === "light" && styles.lightMode)}
        src={darkIcon}
        width="40"
        height="40"
      ></img>
    </Link>
  );
};

export default Logo;
