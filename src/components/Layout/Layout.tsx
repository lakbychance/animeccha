import React, { CSSProperties } from "react";
import styles from "./Layout.module.css";

interface ComponentProps {
  layoutStyles?: CSSProperties;
}
const Layout: React.FC<ComponentProps> = ({ children, layoutStyles }) => {
  return (
    <div className={styles.layout} style={{ ...layoutStyles }}>
      {children}
    </div>
  );
};
export default Layout;
