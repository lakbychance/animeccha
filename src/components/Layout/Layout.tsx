import React, { CSSProperties, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Layout.module.css";

interface ComponentProps {
  layoutStyles?: CSSProperties;
}
const Layout: React.FC<ComponentProps> = ({ children, layoutStyles }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.layout} style={{ ...layoutStyles }}>
      {children}
    </div>
  );
};
export default Layout;
