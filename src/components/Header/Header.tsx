import React from "react";
import styles from "./Header.module.css";

interface ComponentProps {
  text?: string;
}

const Header: React.FC<ComponentProps> = ({ children, text }) => {
  return (
    <header className={styles.heading}>
      {children}
      <h1 className={styles.text}>{text}</h1>
    </header>
  );
};

export default Header;
