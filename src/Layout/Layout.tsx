import React from "react";
import styles from "./Layout.module.css";
const Layout = ({ children, layoutStyles }: any) => {
  return <div className={styles.layout} style={{...layoutStyles}}>{children}</div>;
};
export default Layout;
